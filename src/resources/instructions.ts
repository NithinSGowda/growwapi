import { INSTRUCTIONS_URL } from '../config';
import { InstructionsType } from '../types/InstructionsType';
import { readCSVFile } from '../utils/file';
import { fetchCSV } from '../utils/fileCache';

export class Instructions {

  async getInstructions() {
    const {filePath} = await fetchCSV(INSTRUCTIONS_URL);
    // console.log(`Fetched instructions from ${filePath}`);
    return readCSVFile(filePath);
  }

//   async getInstructionsByType(headerName: InstructionsType, value: string | string[]) {
//     const response = await Instructions.Instructions();
//     const isCsv = response.headers.get('content-type')?.includes('text/csv');
//     if (!isCsv) return { headers: [], instructions: {} };

//     const text = await response.text();
//     const lines = text.split('\n').filter(line => line.trim() !== '');
//     if (lines.length === 0) return { headers: [], instructions: {} };

//     const headers = lines[0].split(',').map(h => h.trim());
//     const columnIndex = headers.indexOf(headerName);
//     if (columnIndex === -1) return { headers, instructions: {} };

//     const instructions = lines.slice(1).map(line => line.split(','));
//     const dict = {} as { [key: string]: string[][] };
//     instructions.forEach(row => {
//       const field = row[columnIndex]?.trim();
//       if (Array.isArray(value) ? value.includes(field) : field === value) {
//         if (!dict[field]) dict[field] = [];
//         dict[field].push(row);
//       }
//     });

//     return { headers, instructions: dict };
//   }

}
