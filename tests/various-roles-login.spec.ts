import { test, expect } from '@playwright/test';
import { USERS } from './test-users';

const BASE_URL = 'https://www.saucedemo.com/';
const USERNAME = process.env.TEST_USERNAME;
const PASSWORD = process.env.TEST_PASSWORD;

test.describe('Login with different roles', () => {
  for (const { username, password } of USERS) {
    test(`should login as ${username}`, async ({ page }) => {
      await page.goto(BASE_URL);
      await page.fill('#user-name', username);
      await page.fill('#password', password);
      await page.click('#login-button');
      if (username === 'locked_out_user') {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      } else {
        // For all other users, expect to be on inventory page
        await expect(page).toHaveURL(/.*inventory/);
      }
    });
  }
});
