const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 0,
  timeout: 60000,
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  
  reporter: [['html', { outputFolder: 'playwright-report' }]]
});