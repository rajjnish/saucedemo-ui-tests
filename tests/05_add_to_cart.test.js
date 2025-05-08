const { test, expect } = require('../utils/testWithLogin');
const { InventoryPage } = require('../pages/inventoryPage');

test('Add to cart button works', async ({ page }) => {
  const inventory = new InventoryPage(page);

  await inventory.addToCartBackpack.click();
  await expect(inventory.removeBackpack).toBeVisible();
});
