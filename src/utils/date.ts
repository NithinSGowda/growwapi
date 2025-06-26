import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export function isEpochISO8601(input: string | number): boolean {
  if (typeof input === 'number') {
    return dayjs(input).isValid();
  }

  if (typeof input === 'string') {
    const parsed = dayjs(input, 'YYYY-MM-DD HH:mm:ss', true);
    return parsed.isValid();
  }

  return false;
}

