import { test, expect } from '@playwright/test';
import { Given, When, Then} from '@cucumber/cucumber';
import { chromium, Page, Browser, Expect } from '@playwright/test';
import { HomePage } from '../../../pages/homePage.ts';
import { LoginPage } from '../../../pages/loginPage.ts';
import { SignUpPage } from '../../../pages/signUpPage.ts';
import { pageFixture } from '../../hooks/pageFixture.ts';

let homePage: HomePage;
let loginPage: LoginPage;
let signUpPage: SignUpPage;

Given ('User is on Homepage', { timeout: 15000 }, async function () {
  await this.homePage.navigateToHomePage();
  await this.homePage.verifyHomePageGuestAllElementsVisible();
  console.log("All Elements are visible on homepage")
});


When ('User clicks Login button', async function() {
  await this.homePage.clickLoginButton();
});

When ('User clicks SignUp link', async function() {
  await this.loginPage.clickSignUpLink();
});

When ('User enters email as {string}', async function (email: string) {
  this.signUpPage = new SignUpPage(pageFixture.page);
  await this.signUpPage.enterValidEmail(email);
});

When ('User clicks Continue button', async function() {
  await this.signUpPage.clickContinue();
});

When ('User clicks Skip button', async function(){
  await this.signUpPage.clickSkip();
})

When ('User enters password as {string}', async function (password: string){
  await this.signUpPage.enterPassword(password);
})

When ('User closes Email sent toast message', async function (){
  await this.signUpPage.closeToastMessage();  
})

