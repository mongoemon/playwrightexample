import { test, expect } from '@playwright/test';

test('Complete checkout and verify order confirmation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory/);

  // Add item to cart
  await page.click('.inventory_item button');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  // Fill checkout info
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  // Verify order confirmation
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
