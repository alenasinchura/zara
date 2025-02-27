import{ test } from "../fixtures/fixtures";

test('001-Search and add a skirt to the cart, check input  validation errors', async ({ itemsPage, cartPage, loginPage}) =>{
await itemsPage.navigateTo('https://www.zara.com/ua/en/');

await itemsPage.click('[aria-label="Close"]');
await itemsPage.click('[aria-label="close"]');

await itemsPage.searchItem('wool skirt');
await itemsPage.selectItem();
await itemsPage.addFourItemsToCard();

await cartPage.openCart();
await cartPage.removeEverySecondItem();
await cartPage.continueToCheckout();

await loginPage.closePopUP();
await loginPage.enterCredentials('test', '11111');
await loginPage.checkEmailError();
await loginPage.checkPasswordError();
});

