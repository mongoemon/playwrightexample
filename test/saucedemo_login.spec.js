import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login Tests', () => {

  test('Successful Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Fill username and password
    await page.fill('input[name="user-name"]', 'standard_user');
    await page.fill('input[name="password"]', 'secret_sauce');

    // Click login button
    await page.click('input[type="submit"]');

    // Verify successful login by checking URL
    await expect(page).toHaveURL(/inventory.html/);

    // Verify presence of products list
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('Login with Invalid Credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Fill incorrect username and password
    await page.fill('input[name="user-name"]', 'invalid_user');
    await page.fill('input[name="password"]', 'wrong_password');

    // Click login button
    await page.click('input[type="submit"]');

    // Verify error message
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toHaveText(/Username and password do not match/);
  });

  test('Logout after Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Perform Login
    await page.fill('input[name="user-name"]', 'standard_user');
    await page.fill('input[name="password"]', 'secret_sauce');
    await page.click('input[type="submit"]');

    // Verify login success
    await expect(page).toHaveURL(/inventory.html/);

    // Click on menu button
    await page.click('#react-burger-menu-btn');

    // Click logout button
    await page.click('#logout_sidebar_link');

    // Verify logout by checking URL
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

});
