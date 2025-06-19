// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page.ts';
import { InventoryPage } from '../page-objects/inventory-page.ts';

test.describe('Login Feature', () => {
  test('login to add item', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    // await loginPage.goToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectToBeOnDashboard();

    // save login session to file
    await page.context().storageState({ path: 'storageState.json' });

    await inventoryPage.addItem();

  });

  test.use({ storageState: 'storageState.json' });

  test('direct login and add item', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
  
      await inventoryPage.addItem();
  
  });



});