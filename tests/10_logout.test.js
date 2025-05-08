const { test, expect } = require('../utils/testWithLogin');

test('User can logout from the menu', async ({ page }) => {
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  await expect(page).toHaveURL('/');
});
