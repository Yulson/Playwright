import { Page, Locator, expect } from '@playwright/test';

export class SignUpPage {
    readonly page: Page;
    readonly redditLogo: Locator; 
    readonly signUpHeader: Locator;
    readonly googleText: Locator;
    readonly emailInputField: Locator;
    readonly continueButtonStep1: Locator;
    readonly closeIcon: Locator;
    readonly skipButton: Locator;
    readonly passwordInputField: Locator;
    readonly toastMessage: Locator;
    readonly usernameInputField: Locator;
    readonly continueButtonStep2: Locator;
    readonly manIdentityButton: Locator;
    readonly feedButton: Locator;
    readonly continueButtonStep3: Locator;
    readonly personalizeBanner: Locator;

    
    
    constructor (page: Page) {
    this.page = page;
    this.redditLogo = page.locator('.h-header-large flex items-center');
    this.signUpHeader = page.getByText(' By continuing, you agree to our ');
    this.googleText = page.locator('#button-label');
    this.emailInputField = page.locator('#register-email input');
    this.continueButtonStep1 = page.locator('[noun="register"] .continue');
    this.closeIcon = page.locator('#auth-flow-modal-close-btn');
    this.skipButton = page.locator('[name="skip"]');
    this.usernameInputField = page.locator('#register-username input');
    this.passwordInputField = page.locator('#register-password input');
    this.toastMessage = page.locator('[slot="action"] [icon-name="close-outline"]');
    this.continueButtonStep2 = page.locator('[type="submit"] [class="flex items-center gap-xs"]');
    this.manIdentityButton = page.locator('[value="MALE"]');
    this.feedButton = page.locator('[class="topic-container"]');
    this.continueButtonStep3 = page.locator('[slot="primaryButton"] [type="submit"]:not([disabled])');
    this.personalizeBanner = page.locator('[pagename="onboarding_complete_spinner"]');
    }

    async navigate () {
        await this.page.goto('https://www.reddit.com/login/');
    }

    async enterValidEmail (email: string) {
        await this.emailInputField.fill(email);
    }

    async clickContinue () {
        await this.continueButtonStep1.click();
    }

    async clickSkip () {
        await this.skipButton.click();
    }

    async enterUsername (username: string) {
        await this.usernameInputField.clear();
        await this.usernameInputField.fill(username);
    }

    async enterPassword (password: string) {
        await this.passwordInputField.fill(password);
    }

    async closeToastMessage () {
        await this.toastMessage.click();
    }

    async continueRegistration () {
        await this.continueButtonStep2.click();
        await this.manIdentityButton.click();
    }

    async selectAnyFeed () {
        await this.feedButton.first().click();
    }

    async finalizeRegistration () {
        await this.continueButtonStep3.click();
        await expect(this.personalizeBanner).toBeVisible({ timeout: 20000 });
    }

}