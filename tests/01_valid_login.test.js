const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
require('dotenv').config();

test('Valid user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(process.env.SAUCE_USERNAME, process.env.SAUCE_PASSWORD);

  await expect(page).toHaveURL(/inventory/);
});
