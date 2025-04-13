import { Page, Locator, expect } from '@playwright/test';
import { waitForDebugger } from 'inspector/promises';

export class HomePage {
    readonly page: Page;   
    readonly redditLogo: Locator;
    readonly searchInput: Locator;
    readonly searchIcon: Locator;
    readonly newsGrid: Locator;
    readonly collapseButton: Locator;
    readonly humburgerButton: Locator;
    readonly topPost: Locator;
    readonly topSearchSuggestion: Locator;
    

    //elememts for guest user
    readonly loginButton: Locator;
    readonly getAppButton: Locator;
    readonly settingsButton: Locator;  

    //elements for signed in user
    readonly chatIcon: Locator;
    readonly createButton: Locator;
    readonly bellIcon: Locator;
    readonly profileIcon: Locator;
    readonly personalizeBanner: Locator;
    readonly deleteAccountLink: Locator;
    readonly deleteUsernameField: Locator;
    readonly deletePasswordField: Locator;
    readonly deleteCheckBox: Locator;
    readonly deleteButton: Locator;
    readonly communityPanel: Locator;

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
        this.searchIcon = page.locator('#search-input')
        this.searchInput = page.locator('input[enterkeyhint="search"]');
        this.loginButton = page.locator('#login-button');
        this.getAppButton = page.locator('#get-app');
        this.settingsButton = page.locator('#expand-user-drawer-button');
        this.newsGrid = page.locator('#list');
        this.collapseButton = page.locator('#flex-nav-collapse-button');
        this.humburgerButton = page.locator('#hamburger-button-tooltip');
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
        this.topSearchSuggestion = page.locator('[data-testid="search-sdui-typeahead-suggestion"]');
        this.personalizeBanner = page.locator('[pagename="onboarding_complete_spinner"]');
        this.deleteAccountLink = page.locator('button[aria-label*="Delete account"]');
        this.deleteUsernameField = page.locator('input[type="username"]');
        this.deletePasswordField = page.locator('input[type="password"]');
        this.deleteCheckBox = page.locator('[icon-name="checkbox-outline"]');
        this.deleteButton = page.locator('.button-medium[slot="primary-button"]');
        this.communityPanel = page.locator('[aria-label="Community information"]');
    }

    async navigateToHomePage () {
        await this.page.goto('https://www.reddit.com');
    }

    async verifyHomePageGuestAllElementsVisible () {
        await expect(this.redditLogo).toBeVisible();
        await expect(this.searchIcon).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.getAppButton).toBeVisible();
        await expect(this.settingsButton).toBeVisible();
        await expect(this.newsGrid).toBeVisible();
    }

    async verifyHomePageSignedInAllElementsVisible () {
        await this.profileIcon.waitFor({ state: 'visible', timeout: 15000 });
        await expect(this.redditLogo).toBeVisible();
        await expect(this.searchIcon).toBeVisible();
        await expect(this.chatIcon).toBeVisible();
        await expect(this.createButton).toBeVisible();
        await expect(this.bellIcon).toBeVisible();
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
        await this.communityPanel.waitFor();
    }

    async enterSearchText (searchText: string) {
        await this.searchInput.click();
        await this.searchInput.fill(searchText);
        await this.topSearchSuggestion.first().waitFor({state: 'visible'});
        await this.topSearchSuggestion.first().click();
    }

    async clickDeleteAccountLink () {
        await this.deleteAccountLink.scrollIntoViewIfNeeded();
        await this.deleteAccountLink.click();
    } 
    
    async enterCredentialsToDelete (username: string, password: string) {
        await this.deleteUsernameField.click();
        await this.deleteUsernameField.fill(username);
        await this.deletePasswordField.click();
        await this.deletePasswordField.fill(password);
        await this.deleteCheckBox.click();
    }

    async clickDelete () {
        await this.deleteButton.click();
    }
    
}