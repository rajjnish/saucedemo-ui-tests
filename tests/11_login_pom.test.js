const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
require('dotenv').config();

test('Login using page object model', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const username = process.env.SAUCE_USERNAME;
  const password = process.env.SAUCE_PASSWORD;

  await loginPage.navigate();
  await loginPage.login(username, password);

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});
