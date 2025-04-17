import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Resolve path to creds.json in the data folder
const credsPath = path.resolve(__dirname, '../data/creds.json');
const creds = JSON.parse(fs.readFileSync(credsPath, 'utf-8'));

test('Login to saucedemo.com', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', creds.username);
  await page.fill('#password', creds.password);
  await page.click('#login-button');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
