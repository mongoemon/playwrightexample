import { test, expect } from '@playwright/test';

// Example: Login test for a real website (saucedemo.com)
test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});
