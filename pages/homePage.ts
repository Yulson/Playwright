import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly redditLogo: Locator;
    readonly searchInput: Locator;
    readonly searchIcon: Locator;
    readonly searchLable: Locator;
    readonly loginButton: Locator;
    readonly getAppButton: Locator;
    readonly settingsButton: Locator;
    readonly newsGrid: Locator;
    readonly collapseButton: Locator;
    readonly humburgerButton: Locator;
    readonly adsIcon: Locator;
    readonly chatIcon: Locator;
    readonly createButton: Locator;
    readonly bellIcon: Locator;
    readonly profileIcon: Locator;
    readonly viewProfileIcon: Locator;
    readonly viewProfileLable: Locator;
    readonly editAvatarIcon: Locator;
    readonly editAvatarLable: Locator;
    readonly achievmentsIcon: Locator;
    readonly achievmentsLable: Locator;
    readonly achievmentsStats: Locator;
    readonly contributorIcon: Locator;
    readonly contributorLable: Locator;
    readonly contributorStats: Locator;
    readonly darkModeIcon: Locator;
    readonly darkModeLable: Locator;
    readonly darkModeToggle: Locator;
    readonly logOutIcon: Locator;
    readonly logOutLable: Locator;
    readonly advertiseIcon: Locator;
    readonly advertiseLable: Locator;


    constructor(page: Page){
        this.page = page;
        this.redditLogo = page.locator('#reddit-logo');
        this.searchInput = page.locator('#search-input');
        this.searchIcon = page.locator('span.leadingIcon > svg:only-child');
        this.searchLable = page.getByPlaceholder('Search Reddit');
        this.loginButton = page.locator('#login-button');
        this.getAppButton = page.locator('#get-app');
        this.settingsButton = page.locator('#expand-user-drawer-button');
        this.newsGrid = page.locator('#list');
        this.collapseButton = page.locator('#flex-nav-collapse-button');
        this.humburgerButton = page.locator('#hamburger-button-tooltip');
        this.adsIcon = page.locator('#advertise-button');
        this.chatIcon = page.locator('#header-action-item-chat-button');
        this.createButton = page.locator('#create-post');
        this.bellIcon = page.locator('#notifications-inbox-button');
        this.profileIcon = page.locator('#expand-user-drawer-button');
        this.viewProfileIcon = page.locator('');
        this.viewProfileLable = page.locator('');
        this.editAvatarIcon = page.locator('');
        this.editAvatarLable = page.locator('');
        this.achievmentsIcon = page.locator('');
        this.achievmentsLable = page.locator('');
        this.achievmentsStats = page.locator('');
        this.contributorIcon = page.locator('');
        this.contributorLable = page.locator('');
        this.contributorStats = page.locator('');
        this.darkModeIcon = page.locator('');
        this.darkModeLable = page.locator('');
        this.darkModeToggle = page.locator('');
        this.logOutIcon = page.locator('');
        this.logOutLable = page.locator('');
        this.advertiseIcon = page.locator('');
        this.advertiseLable = page.locator('');

    }

    async navigateToHomePage (){
        await this.page.goto('https://www.reddit.com');
    }

    async verifyHomePageGuestAllElementsVisible (){
        await expect(this.redditLogo).toBeVisible();
        await expect(this.searchInput).toBeVisible();
        await expect(this.searchIcon).toBeVisible();
        await expect(this.searchLable).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.getAppButton).toBeVisible();
        await expect(this.settingsButton).toBeVisible();
        await expect(this.newsGrid).toBeVisible();
    }

    async verifyHomePageSignedInAllElementsVisible (){
        await expect(this.redditLogo).toBeVisible();
        await expect(this.searchInput).toBeVisible();
        await expect(this.searchIcon).toBeVisible();
        await expect(this.searchLable).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.getAppButton).toBeVisible();
        await expect(this.settingsButton).toBeVisible();
        await expect(this.newsGrid).toBeVisible();
    }

    async clickLoginButton (){
        await this.loginButton.click()
    }
}