import { test, expect } from '@playwright/test';

test('Sort inventory items and verify sorting', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory/);

  // Sort by price (low to high)
  await page.selectOption('.product_sort_container', 'lohi');

  // Get all item prices
  const prices = await page.$$eval('.inventory_item_price', els => els.map(e => parseFloat(e.textContent.replace('$', ''))));
  const sorted = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sorted);
});
