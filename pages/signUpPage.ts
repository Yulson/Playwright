import { Page, Locator, expect } from '@playwright/test';

export class SignUpPage {
    readonly page: Page;
    readonly redditLogo: Locator; 
    readonly signUpHeader: Locator;
    readonly termsOfUse1: Locator;
    readonly termsOfUse2: Locator;
    readonly userAgreementLink: Locator;
    readonly privacyPolicyLink: Locator;
    readonly agreementCheckbox: Locator;
    readonly agreementText: Locator;
    readonly phoneNumberButton: Locator;
    readonly phoneNumberText: Locator;
    readonly googleButton: Locator;
    readonly googleText: Locator;
    readonly appleButton: Locator;
    readonly appleText: Locator;
    readonly emailInputField: Locator;
    readonly alreadyRedditorText: Locator;
    readonly logInLink: Locator;
    readonly continueButton: Locator;
    readonly continueButtonLable: Locator;
    readonly closeIcon: Locator;

    
    
    constructor(page: Page){
    this.page = page;
    this.redditLogo = page.locator('.h-header-large flex items-center');
    this.signUpHeader = page.getByText(' By continuing, you agree to our ');
    this.termsOfUse1 = page.locator('');
    this.termsOfUse2 = page.locator('');
    this.userAgreementLink = page.locator('');
    this.privacyPolicyLink = page.locator('');
    this.agreementCheckbox = page.locator('');
    this.agreementText = page.locator('');
    this.phoneNumberButton = page.locator('');
    this.phoneNumberText = page.locator('');
    this.googleButton = page.locator('');
    this.googleText = page.locator('#button-label');
    this.appleButton = page.locator('');
    this.appleText = page.locator('');
    this.emailInputField = page.locator('#register-email');
    this.alreadyRedditorText = page.locator('');
    this.logInLink = page.locator('');
    this.continueButton = page.locator('');
    this.continueButtonLable = page.locator('');
    this.closeIcon = page.locator('#auth-flow-modal-close-btn');
    }

    async navigate (){
        await this.page.goto('https://www.reddit.com/login/');
    }
}