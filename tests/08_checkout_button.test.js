const { test, expect } = require('../utils/testWithLogin');

test('Checkout button appears after going to cart', async ({ page }) => {
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');

  const checkoutBtn = page.locator('[data-test="checkout"]');
  await expect(checkoutBtn).toBeVisible();
});
