import { test, expect } from '@playwright/test';
import { SECURITY_CASES } from './security-cases';

const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Data-driven security tests for login page', () => {
  for (const { name, username, password } of SECURITY_CASES) {
    test(`should not allow: ${name}`, async ({ page }) => {
      await page.goto(BASE_URL);
      await page.fill('#user-name', username);
      await page.fill('#password', password);
      await page.click('#login-button');
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
  }

  test('should lock out after multiple failed attempts', async ({ page }) => {
    await page.goto(BASE_URL);
    for (let i = 0; i < 5; i++) {
      await page.fill('#user-name', 'standard_user');
      await page.fill('#password', 'wrong_password');
      await page.click('#login-button');
    }
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});
