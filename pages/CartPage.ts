import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  private openCartButton = '[data-qa-id="layout-header-go-to-cart"]';
  private removeButtons = '//button[@data-qa-id="remove"]';
  private continueShopping = '[data-qa-id="shop-continue"]';

  async openCart() {
    await this.click(this.openCartButton);
  }

  async removeEverySecondItem() {
    const removeButtons = this.page.locator(this.removeButtons);
    const count = await removeButtons.count();
    
    for (let i = 1; i < count; i += 2) {
        await removeButtons.nth(i).click();
    }
  }

  async continueToCheckout() {
    await this.click(this.continueShopping);
  }
  }