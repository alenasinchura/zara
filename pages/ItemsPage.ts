import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";

export class ItemsPage extends BasePage{
    private searchIcon: Locator;
    private searchInput: Locator;
    private productItem: Locator;
    private productImage: Locator;
    private addToCartButton: Locator;
    private closeIcon: Locator;
    private sizeSelectors: {[key: string]: Locator};
    
    constructor(page:Page){
        super(page);
    
        this.searchIcon = this.page.locator('[data-qa-id="header-search-text-link"]');
        this.searchInput = this.page.locator('[aria-label="Search text input"]');
        this.productItem = this.page.locator('//li[@id="search-home-form-combo-item-0"]');
        this.productImage = this.page.locator('//img[contains(@alt, "LIMITED EDITION 100% WOOL SKIRT")]');
        this.addToCartButton = this.page.locator('[data-qa-action="add-to-cart"]');
        this.closeIcon = this.page.locator('.zds-drawer-header');

        this.sizeSelectors = {
    XS: this.page.locator('//*[@class="size-selector-sizes-size__label size-selector-sizes-size__element" and text()="XS"]'),
    S: this.page.locator('//*[@class="size-selector-sizes-size__label size-selector-sizes-size__element" and text()="S"]'),
    M: this.page.locator("//*[contains(@class, 'size-selector-sizes-size__label') and contains(text(), 'M')]"),
    L: this.page.locator("//*[contains(@class, 'size-selector-sizes-size__label') and contains(text(), 'L')]")
};
    }
    async searchItem(itemName:string): Promise<void> {
        await this.searchIcon.click();
        await this.searchInput.pressSequentially(itemName);
        await this.productItem.click();
    }

    async selectItem(){
        this.productImage.click();
    }

    async addFourItemsToCard(){
        await this.addToCartButton.click();
        await this.sizeSelectors.XS.click();
        await this.closeIcon.click();
    
        await this.addToCartButton.click();
        await this.sizeSelectors.S.click();
        await this.page.locator('[data-qa-action="bracketing__add-to-cart"]').click();
        await this.closeIcon.click();
    
        await this.addToCartButton.click();
        await this.sizeSelectors.M.click();
        await this.closeIcon.click();
    
        await this.addToCartButton.click();
        await this.sizeSelectors.L.click();
        await this.closeIcon.click();

    }
}
