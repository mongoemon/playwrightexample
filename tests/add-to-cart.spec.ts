import { test, expect } from '@playwright/test';

// Example: Add to cart test for saucedemo.com
test('Add item to cart after login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory/);
  await page.click('.inventory_item button'); // Click first add to cart button
  await page.click('.shopping_cart_link');
  await expect(page.locator('.cart_item')).toBeVisible();
});
