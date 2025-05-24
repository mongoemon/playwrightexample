import { expect, Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItem() {

    // Make sure the page is on the inventory page, if not, navigate to it
    if (this.page.url() !== 'https://www.saucedemo.com/inventory.html') {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
        }
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Make sure everything is loaded and not more loading
    await this.page.waitForSelector('.inventory_item', { state: 'visible' });
    // page is idle
    await this.page.waitForLoadState('networkidle');

    // click add to cart
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Verify the cart icon has been updated
    const cartLocator = this.page.locator('[data-test="shopping-cart-link"]');
    await expect(cartLocator).toHaveText('1');

    // Verify locator contains the text "remove" from this locator locator('[data-test="remove-sauce-labs-bike-light"]')
    const removeLocator = this.page.locator('[data-test="remove-sauce-labs-bike-light"]');
    await expect(removeLocator).toContainText('Remove');
    
  }
}