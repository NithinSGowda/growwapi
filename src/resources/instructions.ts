import { INSTRUCTIONS_URL } from '../config';
import { CachedCSVResult } from '../types/CachedCSVResult';
import { InstructionsTypeParams } from '../types/InstructionsTypeParams';
import { fetchCSV } from '../utils/fileCache';
import { filterRows, parseCSV, toCamelCaseKeys } from '../utils/instructionsUtils';

export class Instructions {

  async getInstructions(): Promise<CachedCSVResult>{
    return await fetchCSV(INSTRUCTIONS_URL);
  }

  async getFilteredInstructions(params: InstructionsTypeParams): Promise<InstructionsTypeParams[]> {
    const instructionsFile = await this.getInstructions();
    if (!instructionsFile.fileContent) {
      throw new Error('Failed to fetch instructions file');
    }
    const data = parseCSV(instructionsFile.fileContent);
    const filtered = filterRows(data, params);
    return filtered.map(toCamelCaseKeys);
  }
}
