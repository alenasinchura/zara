import {test as base} from "@playwright/test";

import { ItemsPage } from "../pages/ItemsPage";
import { CartPage } from "../pages/CartPage";
import { LoginPage } from "../pages/LoginPage";

type MyFixtures = {
    itemsPage: ItemsPage;
    cartPage: CartPage;
    loginPage: LoginPage;
};
export const test = base.extend<MyFixtures>({
    itemsPage: async({page}, use) =>{
        await use(new ItemsPage(page));
    },

    cartPage: async({page}, use)=>{
        await use(new CartPage(page));
    },
    loginPage: async({page}, use)=>{
        await use(new LoginPage(page))
    }
})