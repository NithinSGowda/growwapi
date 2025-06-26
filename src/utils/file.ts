import fs from 'fs';
import path from 'path';

export function readCSVFile(filePath: string): string {
  try {
    const absolutePath = path.resolve(filePath);
    const data = fs.readFileSync(absolutePath, 'utf-8');
    return data;
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return '';
  }
}
