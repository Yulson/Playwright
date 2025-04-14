import { Given, When, Then } from '@cucumber/cucumber';
import { HomePage } from '../../../pages/homePage.ts';
import { LoginPage } from '../../../pages/loginPage.ts';
import { SignUpPage } from '../../../pages/signUpPage.ts';
import { PostDetailsPage } from '../../../pages/postDetailsPage.ts';
import { pageFixture } from '../../hooks/pageFixture.ts';
import { CommunityPage } from '../../../pages/communityDetailsPage.ts';

let homePage: HomePage;
let loginPage: LoginPage;
let signUpPage: SignUpPage;
let postDetailsPage: PostDetailsPage;
let communityDetailsPage: CommunityPage;

Given ('User is on Homepage', { timeout: 15000 }, async function() {
  await this.homePage.navigateToHomePage();
  await this.homePage.verifyHomePageGuestAllElementsVisible();
});


When ('User clicks Login button', async function() {
  await this.homePage.clickLoginButton();
});

When ('User clicks SignUp link', async function() {
  await this.loginPage.clickSignUpLink();
});

// There are 2 options to generate a new user: 
//  Option 1: to generate each time a new email alias and random username

//When ('User enters new email', async function() {
//  this.signUpPage = new SignUpPage(pageFixture.page);
//  const newEmail = `bayforqa+${Math.floor(Math.random() * 100000)}@gmail.com`
//  await this.signUpPage.enterValidEmail(newEmail);
//});

//Option 2 - insert EMAIL from console as an environmental variable
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

// Option 1 for this method: generate each time a new email

//When ('User enters new username', async function() {
//  const randomUsername = `Auto${Math.floor(Math.random() * 100000)}`;
//  this.generatedUsername = randomUsername;
//  await this.signUpPage.enterUsername(randomUsername);
//})

//Option 2 - insert REDDITNAME from console as an environmental variable
When ('User enters new username', async function() {
  await this.signUpPage.enterUsername(process.env.REDDITNAME);
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

When ('User clicks Continue to create a profile', { timeout: 30000 }, async function() {
  await this.signUpPage.finalizeRegistration();
})

Then ('Homepage for signed in user is displayed', { timeout: 20000 }, async function() {
  await this.homePage.verifyHomePageSignedInAllElementsVisible();
  console.log("All Elements are visible on homepage for signed in user");
})

When ('User enters valid email', async function() {
  this.loginPage = new LoginPage(pageFixture.page);
  await this.loginPage.enterValidEmail(process.env.REDDITNAME);
})

When ('User enters valid password', async function() {
  await this.loginPage.enterValidPassword(process.env.PASSWORD);
})

When ('User clicks Login button to log in', { timeout: 15000 }, async function() {
  await this.loginPage.clickLoginButton();
})

When ('User clicks the top post', { timeout: 15000 }, async function() {
  await this.homePage.clickTopPost();
})

Then ('Post details page is displayed', async function() {
  this.postDetailsPage = new PostDetailsPage(pageFixture.page);
  await this.postDetailsPage.verifyPostPageURL();
  await this.postDetailsPage.verifyElementsVisible();
  console.log("All Elements are visible on the Post page")
})

When ('User searches for {string} community', { timeout: 15000 }, async function(searchText: string) {
  await this.homePage.enterSearchText(searchText);
})

When ('Community details page is displayed', async function() {
  this.communityDetailsPage = new CommunityPage(pageFixture.page);
  await this.communityDetailsPage.verifyElementsVisibleCommunityPage();
})

When ('User joins community', async function(){
  await this.communityDetailsPage.joinCommunity();
})

When ('User opens Delete account in settings', { timeout: 15000 }, async function() {
  await pageFixture.page.goto('https://www.reddit.com/settings/');
  await this.homePage.clickDeleteAccountLink();
})

When ('User enters existing credentials', { timeout: 15000 }, async function() {
  await this.homePage.enterCredentialsToDelete(process.env.REDDITNAME, process.env.PASSWORD);
})

Then ('User deletes account', async function() {
  await this.homePage.clickDelete();
})


