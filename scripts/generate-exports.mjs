import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesDir = path.join(__dirname, '../src/types');
const indexFile = path.join(typesDir, 'index.ts');

// Function to recursively get all TypeScript files
const getAllTypeFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts')
    .map((entry) => path.relative(typesDir, path.join(dir, entry.name)));

  const directories = entries.filter((entry) => entry.isDirectory());

  for (const directory of directories) {
    files.push(...getAllTypeFiles(path.join(dir, directory.name)));
  }

  return files;
};

// Get all TypeScript files recursively
const typeFiles = getAllTypeFiles(typesDir);

// Generate export statements
const exportStatements = typeFiles
  .map((file) => `export * from './${file.replace('.ts', '')}';`)
  .join('\n');

// Write to index.ts
fs.writeFileSync(indexFile, exportStatements);
fs.appendFileSync(indexFile, '\n');

console.log('Exports generated successfully in index.ts');
