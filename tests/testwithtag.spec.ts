import { test, expect } from '@playwright/test';

// Example: Using https://the-internet.herokuapp.com/login as a real test website
const BASE_URL = 'https://the-internet.herokuapp.com/login';

test.describe('Login tests for the-internet.herokuapp.com', () => {
  test('@smoke should login successfully with valid credentials', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.success')).toBeVisible();
    await expect(page).toHaveURL(/secure/);
  });

  test('@regression should show error with invalid credentials', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#username', 'invalid_user');
    await page.fill('#password', 'invalid_pass');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.error')).toBeVisible();
    await expect(page).not.toHaveURL(/secure/);
  });

  test('@regression should show error with empty fields', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.error')).toBeVisible();
  });
});
