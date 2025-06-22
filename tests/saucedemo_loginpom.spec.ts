// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page.ts';
import { InventoryPage } from '../page-objects/inventory-page.ts';

// First, create the storage state
test.describe('Login and save storage state', () => {
  test('login and save session', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectToBeOnDashboard();

    // Save login session to file
    await page.context().storageState({ path: 'storageState.json' });

    await inventoryPage.addItem();
  });
});

// Now, use the storage state for other tests
test.describe('Use saved storage state', () => {
  test.use({ storageState: 'storageState.json' });

  test('direct login and add item', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addItem();
  });

  test('go directly to inventory page after login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});