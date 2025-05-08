const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
require('dotenv').config();

test('Locked out user gets error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(process.env.SAUCE_LOCKED_USER, process.env.SAUCE_PASSWORD);

  const errorMsg = await loginPage.getErrorText();
  expect(errorMsg).toContain('Sorry, this user has been locked out.');
});
