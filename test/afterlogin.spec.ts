// tests/afterLogin.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page.ts';

test.use({ storageState: 'storageState.json' });

test.describe('Login Feature', () => {
  test('login to add item', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/inventory.html');
  });



});