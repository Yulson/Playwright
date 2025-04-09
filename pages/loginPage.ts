import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly redditLogo: Locator;
    readonly loginHeader: Locator;
    readonly termsOfUse1: Locator;
    readonly termsOfUse2: Locator;
    readonly userAgreementLink: Locator;
    readonly privacyPolicyLink: Locator;
    readonly phoneNumberIcon: Locator;
    readonly googleIcon: Locator;
    readonly appleButton: Locator;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly forgotPasswordLink: Locator;
    readonly newToRedditLable: Locator;
    readonly signUpLink: Locator;
    readonly loginButton: Locator


    constructor(page: Page) {
        this.page = page;
        this.redditLogo = page.locator('[class="hidden s:flex items-center"]');
        this.loginHeader = page.locator('');
        this.termsOfUse1 = page.locator('');
        this.termsOfUse2 = page.locator('');
        this.userAgreementLink = page.locator('a[href="https://www.redditinc.com/policies/user-agreement"]');
        this.privacyPolicyLink = page.locator('a[href="https://www.redditinc.com/policies/privacy-policy"]');
        this.phoneNumberIcon = page.locator('[icon-name="phone-outline"]');
        this.googleIcon = page.locator('[class="nsm7Bb-HzV7m-LgbsSe-Bz112c"]');
        this.appleButton = page.locator('[aria-label="Sign in with Apple"]');
        this.emailInputField = page.locator('#login-username');
        this.passwordInputField = page.locator('#login-password');
        this.forgotPasswordLink = page.locator('[noun="forgot_password"]');
        this.newToRedditLable = page.locator('[class="lg:mt-sm mt-md text-14"]');
        this.signUpLink = page.locator('[step="register"]');
        this.loginButton = page.locator('.w-100');
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
        await expect(this.googleIcon).toBeVisible();
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