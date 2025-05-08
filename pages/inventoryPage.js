class InventoryPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.productTitles = page.locator('.inventory_item_name');
    this.sortDropdown = page.locator('select[data-test="product-sort-container"]');
    this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.removeBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  async verifyPageLoaded() {
    await this.pageTitle.waitFor({ state: 'visible' });
    await this.sortDropdown.waitFor({ state: 'visible' });
  }

  async sortBy(optionValue) {
    await this.sortDropdown.selectOption(optionValue);
  }

  async addAndRemoveBackpack() {
    await this.addToCartBackpack.click();
    await this.removeBackpack.click();
  }

  async isAddToCartVisibleAgain() {
    return this.addToCartBackpack.isVisible();
  }
}

module.exports = { InventoryPage };
