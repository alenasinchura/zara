import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private emailInput : Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;
  private popUpCloseButton: Locator;

  constructor(page:Page){
    super(page);

    this.emailInput = this.page.locator('[data-qa-input-qualifier="email"]');
    this.passwordInput = this.page.locator('[data-qa-input-qualifier="password"]');
    this.loginButton = this.page.locator('[data-qa-action="logon-view-alternate-button"]');
    this.errorMessage = this.page.locator('.form-input-error span');
    this.popUpCloseButton = this.page.locator('[aria-label="close"]');
  };

async closePopUP(){
    await this.popUpCloseButton.click();
}

async enterCredentials(email:string, password:string){
  await this.loginButton.click();
  await this.emailInput.fill(email);
  await this.passwordInput.fill(password);
    
}

async checkEmailError() {
    await expect(this.errorMessage).toContainText('Enter a valid e-mail address.');
  }

async checkPasswordError() {
    await expect(this.page.locator('#zds-5')).toContainText('PasswordEnter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers.');
  }
};