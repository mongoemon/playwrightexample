// env.ts - Environment configuration for Playwright tests
export const BASE_URLS: Record<string, string> = {
//   dev: 'https://dev.saucedemo.com/',
//   staging: 'https://staging.saucedemo.com/',
  prod: 'https://www.saucedemo.com/'
};
export const ENV = process.env.TEST_ENV || 'prod';
export const BASE_URL = BASE_URLS[ENV];
