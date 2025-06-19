import { test, expect } from '@playwright/test';

test('Add multiple items to cart and verify', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory/);

  // Add first two items to cart
  await page.click('.inventory_item:nth-child(1) button');
  await page.click('.inventory_item:nth-child(2) button');
  await page.click('.shopping_cart_link');

  // Verify both items are in the cart
  const cartItems = await page.locator('.cart_item').count();
  expect(cartItems).toBe(2);
});
