import { test, expect } from '@playwright/test';

test('All locator types example', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // By ID
  // <input class="input_error form_input" placeholder="Username" type="text" data-test="username" id="user-name" name="user-name" autocorrect="off" autocapitalize="none" value="">
  const usernameById = page.locator('#user-name'); // ID selector

  // By class
  // <input class="submit-button btn_action" ... id="login-button" ...>
  const loginButtonByClass = page.locator('.btn_action'); // Class selector

  // By attribute
  // <input class="input_error form_input" placeholder="Password" type="password" data-test="password" id="password" name="password" autocorrect="off" autocapitalize="none" value="">
  const passwordByAttr = page.locator('[data-test="password"]'); // Attribute selector

  // By text (exact)
  // <input ... id="login-button" ... value="Login">
  const loginButtonByText = page.getByText('Login'); // Text selector (exact)

  // By text (partial)
  // <a id="about_sidebar_link" ...>About</a>
  const aboutLinkByPartialText = page.getByText('About', { exact: false }); // Partial text

  // By role
  // <input type="submit" class="submit-button btn_action" id="login-button" ... value="Login">
  const loginButtonByRole = page.getByRole('button', { name: 'Login' }); // Role selector

  // By placeholder
  // <input ... placeholder="Username" ...>
  const usernameByPlaceholder = page.getByPlaceholder('Username'); // Placeholder selector

  // By label
  // (Not available on saucedemo.com, but example shown)
  // <label for="email">Email</label><input id="email" ...>
  // const inputByLabel = page.getByLabel('Email'); // Label selector

  // By nth element
  // <div class="inventory_item">...</div>
  const firstInventoryItem = page.locator('.inventory_item').first(); // First element in a list

  // By CSS (complex)
  // <a class="shopping_cart_link" ...></a>
  const cartIcon = page.locator('a.shopping_cart_link'); // CSS selector

  // By XPath
  // <form class="login-box">...</form>
  const loginFormByXPath = page.locator('//form[@class="login-box"]'); // XPath selector

  // By test id (Playwright test id, if used in app)
  // <div data-testid="my-test-id">...</div>
  // const elementByTestId = page.getByTestId('my-test-id'); // Test id selector

  // Example usage
  await expect(usernameById).toBeVisible();
  await expect(loginButtonByClass).toBeVisible();
  await expect(passwordByAttr).toBeVisible();
  await expect(loginButtonByText).toBeVisible();
  await expect(loginButtonByRole).toBeVisible();
  await expect(usernameByPlaceholder).toBeVisible();
  await expect(firstInventoryItem).not.toBeVisible(); // Not visible before login
  // await expect(cartIcon).toBeVisible(); // Commented out: cart icon is not visible before login
  // await expect(loginFormByXPath).toBeVisible(); // Commented out: login form is not visible after login

  // Optionally, perform login and then check cart icon
  await usernameById.fill('standard_user');
  await passwordByAttr.fill('secret_sauce');
  await loginButtonByRole.click();
  await expect(cartIcon).toBeVisible();
  await expect(firstInventoryItem).toBeVisible();
});
