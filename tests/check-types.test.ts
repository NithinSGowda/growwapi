/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const typesDir = path.join(__dirname, '../src/types');
const indexFile = path.join(typesDir, 'index.ts');
const generateExportsScript = path.join(__dirname, '../scripts/generate-exports.mjs');

describe('Type Exports Validation', () => {
  it('should match the generated index.ts content with the existing index.ts file', () => {
    // Read the existing index.ts content
    const existingContent = fs.readFileSync(indexFile, 'utf-8');

    // Run the script to generate index.ts
    execSync(`node ${generateExportsScript}`);

    // Read the generated index.ts content
    const generatedContent = fs.readFileSync(indexFile, 'utf-8');

    // Compare
    expect(generatedContent).toEqual(existingContent);
  });
});
