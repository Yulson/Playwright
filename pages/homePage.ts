import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;   
    readonly redditLogo: Locator;
    readonly searchInput: Locator;
    readonly newsGrid: Locator;
    readonly collapseButton: Locator;
    readonly humburgerButton: Locator;
    readonly topPost: Locator;
    

    //elememts for guest user
    readonly loginButton: Locator;
    readonly getAppButton: Locator;
    readonly settingsButton: Locator;  

    //elements for signed in user
    readonly adsIcon: Locator;
    readonly chatIcon: Locator;
    readonly createButton: Locator;
    readonly bellIcon: Locator;
    readonly profileIcon: Locator;

    //elements of user menu
    readonly userMenu: Locator;
    readonly viewProfileIcon: Locator;
    readonly editAvatarSection: Locator;
    readonly achievmentsIcon: Locator;
    readonly contributorIcon: Locator;
    readonly darkModeToggle: Locator;
    readonly logOutIcon: Locator;

   
    constructor (page: Page) {
        this.page = page;
        this.redditLogo = page.locator('#reddit-logo');
        this.searchInput = page.locator('#search-input');
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
        this.userMenu = page.locator('#user-drawer-content');
        this.viewProfileIcon = page.locator('[class="text-20 leading-4"]');
        this.editAvatarSection = page.locator('a[href="https://reddit.com/avatar"]');
        this.achievmentsIcon = page.locator('[icon-name="contest-outline"]');
        this.contributorIcon = page.locator('[icon-name="wallet-outline"]');
        this.darkModeToggle = page.locator('#darkmode-list-item');
        this.logOutIcon = page.locator('#logout-list-item');
        this.topPost = page.locator('[slot="full-post-link"]');
        

    }

    async navigateToHomePage () {
        await this.page.goto('https://www.reddit.com');
    }

    async verifyHomePageGuestAllElementsVisible () {
        await expect(this.redditLogo).toBeVisible();
        await expect(this.searchInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.getAppButton).toBeVisible();
        await expect(this.settingsButton).toBeVisible();
        await expect(this.newsGrid).toBeVisible();
    }

    async verifyHomePageSignedInAllElementsVisible () {
        await expect(this.redditLogo).toBeVisible();
        await expect(this.searchInput).toBeVisible();
        await expect(this.adsIcon).toBeVisible();
        await expect(this.chatIcon).toBeVisible();
        await expect(this.createButton).toBeVisible();
        await expect(this.bellIcon).toBeVisible();
        await expect(this.profileIcon).toBeVisible();
    }

    async clickLoginButton () {
        await this.loginButton.click()
    }

    async clickTopPost () {
        const topNews = this.topPost.first();
        const postUrl = await topNews.getAttribute('href');
        if (postUrl) {
        await this.page.goto(`https://www.reddit.com${postUrl}`);
    }
    }
    
}