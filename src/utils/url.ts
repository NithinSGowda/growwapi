import snakecaseKeys from 'snakecase-keys';

export function buildUrlWithParams(basePath: string, params: Record<string, any>): string {
  const snakecaseParams = snakecaseKeys(params, { deep: true });
  const queryParams = Object.entries(snakecaseParams)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  return queryParams ? `${basePath}?${queryParams}` : basePath;
}
