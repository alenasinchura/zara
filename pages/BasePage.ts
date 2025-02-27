import { Page } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }
 
  async click(locator:string){
    this.page.locator(locator).click();
  }

  async fillInput(locator: string, text:string){
    await this.page.locator(locator).fill(text);
  }

  async getText(locator:string){
    return this.page.locator(locator).innerText();
  }
}