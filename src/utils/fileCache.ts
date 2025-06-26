import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import os from 'os';
import crypto from 'crypto';

type CachedCSVResult = {
  filePath: string;
  fromCache: boolean;
};

const CACHE_FOLDER = 'csv-cache';

function getCacheFilePath(url: string): string {
  const hash = crypto.createHash('md5').update(url).digest('hex');
  const cacheDir = path.join(os.tmpdir(), CACHE_FOLDER);
  return path.join(cacheDir, `${hash}.csv`);
}

async function ensureCacheDir(filePath: string): Promise<void> {
  const dir = path.dirname(filePath);
  await fsPromises.mkdir(dir, { recursive: true });
}

async function isCacheValid(filePath: string, ttl: number): Promise<boolean> {
  try {
    const stat = await fsPromises.stat(filePath);
    const age = Date.now() - new Date(stat.mtime).getTime();
    return age < ttl;
  } catch {
    return false;
  }
}

async function deleteFileIfExists(filePath: string): Promise<void> {
  try {
    await fsPromises.unlink(filePath);
  } catch {
    console.warn(`Failed to delete file: ${filePath}. It may not exist.`);
  }
}


async function downloadCSVToFile(url: string, filePath: string): Promise<void> {
  const response = await fetch(url);
  if (!response.ok || !response.body) {
    throw new Error(`Failed to fetch CSV: ${response.status} ${response.statusText}`);
  }

  const writer = fs.createWriteStream(filePath);
  const reader = response.body.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    writer.write(Buffer.from(value));
  }

  writer.end();
}


export async function fetchCSV(url: string, ttl: number = 86400000): Promise<CachedCSVResult> {
  const cacheFile = getCacheFilePath(url);
  await ensureCacheDir(cacheFile);

  const validCache = await isCacheValid(cacheFile, ttl);

  if (validCache) {
    return { filePath: cacheFile, fromCache: true };
  }

  await deleteFileIfExists(cacheFile);
  await downloadCSVToFile(url, cacheFile);

  return { filePath: cacheFile, fromCache: false };
}
