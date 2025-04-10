import { test, expect } from '@playwright/test';
import { Given, When, Then} from '@cucumber/cucumber';
import { chromium, Page, Browser, Expect } from '@playwright/test';
import { HomePage } from '../../../pages/homePage.ts';
import { LoginPage } from '../../../pages/loginPage.ts';
import { SignUpPage } from '../../../pages/signUpPage.ts';
import { PostDetailsPage } from '../../../pages/postDetailsPage.ts';
import { pageFixture } from '../../hooks/pageFixture.ts';

let homePage: HomePage;
let loginPage: LoginPage;
let signUpPage: SignUpPage;
let postDetailsPage: PostDetailsPage;

Given ('User is on Homepage', { timeout: 15000 }, async function() {
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

When ('User enters new email', async function() {
  this.signUpPage = new SignUpPage(pageFixture.page);
  await this.signUpPage.enterValidEmail(process.env.EMAIL);
});

When ('User clicks Continue button', async function() {
  await this.signUpPage.clickContinue();
});

When ('User clicks Skip button', async function() {
  await this.signUpPage.clickSkip();
})

When ('User enters new username as {string}', async function (username: string){
  await this.signUpPage.enterUsername(username);
})

When ('User enters new password', async function() {
  await this.signUpPage.enterPassword(process.env.PASSWORD);
})

When ('User closes Email sent toast message', async function() {
  await this.signUpPage.closeToastMessage();  
})

When ('User continues registration', async function() {
  await this.signUpPage.continueRegistration();
})

When ('User selects any popular feed', async function() {
  await this.signUpPage.selectAnyFeed();
})

When ('User clicks Continue to create a profile', async function() {
  await this.signUpPage.finalizeRegistration();
})

Then ('Homepage for signed in user is displayed', async function() {
  await this.homePage.verifyHomePageSignedInAllElementsVisible();
})

When ('User enters valid email', async function() {
  this.loginPage = new LoginPage(pageFixture.page);
  await this.loginPage.enterValidEmail(process.env.EMAIL);
});

When ('User enters valid password', async function() {
  await this.loginPage.enterValidPassword(process.env.PASSWORD);
});

When ('User clicks Login button to log in', async function() {
  await this.loginPage.clickLoginButton();
});

When ('User clicks the top post', { timeout: 15000 }, async function() {
  await this.homePage.clickTopPost();
});

Then ('Post details page is displayed', async function() {
  const url = pageFixture.page.url();
  const redditUrlPattern = /^https:\/\/www\.reddit\.com\/r\/[^\/]+\/comments\/[^\/?]+/;
  expect(url).toMatch(redditUrlPattern);
  const postPage = new PostDetailsPage(this.page);
  await this.postDetailsPage.verifyElementsVisible();
})