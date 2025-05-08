const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('Invalid login displays error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('invalid_user', 'wrong_password');

  const errorMsg = await loginPage.getErrorText();
  expect(errorMsg).toContain('Username and password do not match');
});
