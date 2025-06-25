import { test, expect, devices } from '@playwright/test';
import { VIEWPORTS } from './viewports';

const BASE_URL = 'https://www.saucedemo.com/';

// Desktop
test.use(VIEWPORTS.desktop);
test.describe('Desktop 1280x800', () => {
  test('should display login and work correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/.*inventory/);
  });
});

// Tablet
test.use(VIEWPORTS.tablet);
test.describe('Tablet iPad', () => {
  test('should display login and work correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/.*inventory/);
  });
});

// Mobile
test.use(VIEWPORTS.mobile);
test.describe('Mobile iPhone 12', () => {
  test('should display login and work correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/.*inventory/);
  });
});
