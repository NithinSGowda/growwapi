import Papa from 'papaparse';
import camelcaseKeys from 'camelcase-keys';
import _ from 'lodash';
import { InstructionsTypeParams } from '../types/InstructionsTypeParams';

export function parseCSV(csv: string): Record<string, any>[] {
  const result = Papa.parse<Record<string, any>>(csv, { header: true, skipEmptyLines: true });
  return result.data;
}

export function filterRows(data: Record<string, any>[], params: InstructionsTypeParams): Record<string, any>[] {
  return data.filter(row =>
    Object.entries(params).every(([key, value]) =>
      value === undefined || value === null || row[key] == value || row[_.snakeCase(key)] == value
    )
  );
}

export function toCamelCaseKeys(row: Record<string, any>): Record<string, any> {
  return camelcaseKeys(row, { deep: false });
}
