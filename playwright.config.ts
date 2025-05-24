// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    storageState: 'storageState.json',
  },
});
