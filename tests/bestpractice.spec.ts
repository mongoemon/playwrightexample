import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';
import { InventoryPage } from '../page-objects/inventory-page';

// Group related tests using describe
test.describe('E2E: Inventory Management', () => {
  // Use test hooks for setup/teardown
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('should add an item to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addItem();
    await inventoryPage.verifyCartItemCount('1');
  });

  test('should remove an item from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addItem();
    await inventoryPage.removeItem('sauce-labs-bike-light');
    await inventoryPage.verifyCartItemCount('');
  });

  // ...add more tests as needed...
});