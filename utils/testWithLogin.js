require('dotenv').config();
const { test: base, expect } = require('@playwright/test');

const test = base.extend({
  page: async ({ page }, use) => {
    console.log('🔐 Logging in as:', process.env.SAUCE_USERNAME);
    
    await page.goto('/');

    await expect(page.locator('#user-name')).toBeVisible();
    await page.fill('#user-name', process.env.SAUCE_USERNAME);
    await page.fill('#password', process.env.SAUCE_PASSWORD);
    await page.click('#login-button');

    // Verify login success
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');

    await use(page);
  }
});

module.exports = { test, expect };
