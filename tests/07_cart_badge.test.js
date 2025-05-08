const { test, expect } = require('../utils/testWithLogin');

test('Cart badge shows correct count after adding items', async ({ page }) => {
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});
