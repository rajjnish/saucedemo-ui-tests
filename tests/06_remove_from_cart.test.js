const { test, expect } = require('../utils/testWithLogin');
const { InventoryPage } = require('../pages/inventoryPage');

test('Remove from cart restores button for specific item', async ({ page }) => {
  const inventory = new InventoryPage(page);

  await expect(page).toHaveURL(/inventory/);
  await inventory.verifyPageLoaded();

  await inventory.addAndRemoveBackpack();
  await expect(inventory.addToCartBackpack).toBeVisible();
});
