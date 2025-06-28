/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const typesDir = path.join(__dirname, '../src/types');
const indexFile = path.join(typesDir, 'index.ts');

describe('Type Exports Validation', () => {
  it('should match all exported types with the files in the types directory', () => {
    // Read all files in the types directory
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

    const typeFiles = getAllTypeFiles(typesDir).map((file) => file.replace('.ts', ''));

    // Read index.ts content
    const indexContent = fs.readFileSync(indexFile, 'utf-8');
    const exportedTypes = indexContent
      .split('\n')
      .filter((line) => line.startsWith('export * from'))
      .map((line) => {
        const match = line.match(/'\.\/(.*)';/);
        return match ? match[1] : null;
      })
      .filter(Boolean); // Remove null values

    // Compare
    expect(exportedTypes.sort()).toEqual(typeFiles.sort());
  });
});
