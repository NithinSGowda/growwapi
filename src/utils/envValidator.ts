const requiredEnvVars = [
  'GROWW_API_KEY',
  'GROWW_API_SECRET',
];

export function validateEnvVariables(): void {
  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    const errorMessage = [
      '\n',
      'Environment Validation Error:',
      'The following required environment variables are missing:',
      ...missingVars.map((varName) => `- ${varName}`),
      'Please ensure these variables are set in your environment.',
      '\n',
    ].join('\n');

    throw new Error(errorMessage);
  }
}
