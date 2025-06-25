// viewports.ts - Common viewport/device configurations for Playwright tests
import { devices } from '@playwright/test';

export const VIEWPORTS = {
  desktop: { viewport: { width: 1280, height: 800 } },
  tablet: { ...devices['iPad (gen 7) landscape'] },
  mobile: { ...devices['iPhone 12'] }
};
