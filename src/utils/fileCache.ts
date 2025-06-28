import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import os from 'os';
import crypto from 'crypto';
import { CachedCSVResult } from '../types/CachedCSVResult';
import { FILECACHE_TTL } from '../config';

const CACHE_FOLDER = 'csv-cache';
const memoryCache: Record<string, string> = {};

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

export async function fetchCSV(url: string, ttl: number = FILECACHE_TTL): Promise<CachedCSVResult> {
  const cacheFile = getCacheFilePath(url);
  await ensureCacheDir(cacheFile);

  const validCache = await isCacheValid(cacheFile, ttl);

  if (validCache) {
    if (memoryCache[cacheFile]) {
      return { fileContent: memoryCache[cacheFile] };
    } else {
      const fileContent = await fsPromises.readFile(cacheFile, 'utf-8');
      memoryCache[cacheFile] = fileContent;
      return { fileContent };
    }
  }

  await deleteFileIfExists(cacheFile);
  await downloadCSVToFile(url, cacheFile);
  const fileContent = await fsPromises.readFile(cacheFile, 'utf-8');
  memoryCache[cacheFile] = fileContent;

  return { fileContent };
}
