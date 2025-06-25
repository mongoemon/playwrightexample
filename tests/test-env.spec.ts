// Basic Playwright test script for a real website, with environment separation
import { test, expect } from '@playwright/test';
import { BASE_URL, ENV } from './env';

test.describe(`Login tests on ${ENV} environment`, () => {
  test('should login successfully', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/.*inventory/);
  });

  test('should show error on invalid login', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});
