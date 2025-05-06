import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');


    // await this.page.waitForSelector('#onetrust-accept-btn-handler', { state: 'visible' });
    // await this.page.click('#onetrust-accept-btn-handler');

    // // Verify the text "เข้าสู่ระบบ" is visible
    // await this.page.waitForSelector('text=เข้าสู่ระบบ');
  }

//   async goToLoginPage() {
//     await this.page.click('#header-login-link');
  
//     await expect(this.page).toHaveURL('https://www.saucedemo.com/');
//   }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');

    // Save login session to file
    await this.page.context().storageState({ path: 'storageState.json' });

  }

  async expectToBeOnDashboard() {

    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
  }
}