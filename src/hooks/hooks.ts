import { Before, After } from "@cucumber/cucumber";
import { chromium,  Browser, Page } from "playwright";
import { pageFixture } from "./pageFixture.ts";
import { HomePage } from '../../pages/homePage.ts';
import { LoginPage } from '../../pages/loginPage.ts';

let page: Page;
let browser: Browser;


Before ({ timeout: 10000 }, async function () {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext();

    page = await browser.newPage();
    pageFixture.page = page; 

    // Initialize and attach Page Objects to `this`
    this.homePage = new HomePage(page);
    this.loginPage = new LoginPage(page);
});

After(async function () {
   await pageFixture.page.close();
   await browser.close();
});