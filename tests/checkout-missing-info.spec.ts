import { test, expect } from '@playwright/test';

test('Attempt checkout with missing info and verify error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory/);

  // Add item to cart and go to checkout
  await page.click('.inventory_item button');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  // Leave first name blank
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');

  // Verify error message
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
