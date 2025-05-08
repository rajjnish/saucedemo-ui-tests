const { test, expect } = require('../utils/testWithLogin');
const { InventoryPage } = require('../pages/inventoryPage');

test('Sort products by name Z to A', async ({ page }) => {
  const inventory = new InventoryPage(page);

  await expect(page).toHaveURL(/inventory/);
  await inventory.verifyPageLoaded();

  await inventory.sortBy('za');
  await expect(inventory.productTitles.first()).toHaveText('Test.allTheThings() T-Shirt (Red)');
});
