const { test, expect } = require('../utils/testWithLogin');

test('Inventory page displays correct title', async ({ page }) => {
  await expect(page.locator('.title')).toHaveText('Products');
});
