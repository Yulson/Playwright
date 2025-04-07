import { Page, Locator, expect } from '@playwright/test';

export class SignInPage {
    readonly page: Page;
    readonly redditLogo: Locator; 
    readonly loginHeader: Locator;
    readonly termsOfUse1: Locator;
    readonly termsOfUse2: Locator;
    readonly userAgreementLink: Locator;
    readonly privacyPolicyLink: Locator;
    readonly phoneNumberIcon: Locator;
    readonly phoneNumberButton: Locator;
    readonly phoneNumberText: Locator;
    readonly googleIcon: Locator;
    readonly googleButton: Locator;
    readonly googleText: Locator;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly forgotPasswordLink: Locator;
    readonly newToRedditLable: Locator;
    readonly signUpLink: Locator;
    readonly loginButton: Locator


    constructor(page: Page) {
        this.page = page;
        this.redditLogo = page.locator('.h-header-large flex items-center');
        this.loginHeader = page.locator('');
        this.termsOfUse1 = page.getByText(' By continuing, you agree to our ');
        this.termsOfUse2 = page.locator('');
        this.userAgreementLink = page.locator('');
        this.privacyPolicyLink = page.locator('');
        this.phoneNumberIcon = page.locator('');
        this.phoneNumberText = page.locator('');
        this.phoneNumberButton = page.locator('');
        this.googleIcon = page.locator('');
        this.googleText = page.locator('');
        this.googleButton = page.locator('');
        this.emailInputField = page.locator('#login-username');
        this.passwordInputField = page.locator('#login-password');
        this.forgotPasswordLink = page.locator('');
        this.newToRedditLable = page.locator('');
        this.signUpLink = page.locator('');
        this.loginButton = page.locator('');
    }

    async navigate() {
        await this.page.goto('https://www.reddit.com/login/');
    }

    async verifyAllElementsVisible() {
        await expect(this.redditLogo).toBeVisible();
        await expect(this.loginHeader).toBeVisible();
        await expect(this.termsOfUse1).toBeVisible();
        await expect(this.termsOfUse2).toBeVisible();
        await expect(this.userAgreementLink).toBeVisible();
        await expect(this.privacyPolicyLink).toBeVisible();
        await expect(this.phoneNumberIcon).toBeVisible();
        await expect(this.phoneNumberText).toBeVisible();
        await expect(this.phoneNumberButton).toBeVisible();
        await expect(this.googleIcon).toBeVisible();
        await expect(this.googleText).toBeVisible();
        await expect(this.googleButton).toBeVisible();
        await expect(this.emailInputField).toBeVisible();
        await expect(this.passwordInputField).toBeVisible();
        await expect(this.forgotPasswordLink).toBeVisible();
        await expect(this.newToRedditLable).toBeVisible();
        await expect(this.signUpLink).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }
    async clickSignUpLink(){
        await this.signUpLink.click()
    }
}