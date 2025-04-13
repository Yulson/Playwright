import { Page, Locator, expect } from '@playwright/test';

export class CommunityPage {
    readonly page: Page;   
    readonly redditLogo: Locator;
    readonly searchInput: Locator;
    readonly searchIcon: Locator;
    readonly banner: Locator;
    readonly communityName: Locator;
    readonly joinButton: Locator;
    readonly description: Locator;
    readonly bellIcon: Locator;

    constructor (page: Page) {
        this.page = page;
        this.redditLogo = page.locator('#reddit-logo');
        this.searchIcon = page.locator('#search-input');
        this.searchInput = page.locator('input[enterkeyhint="search"]');
        this.banner = page.locator('.community-banner');
        this.communityName = page.locator('[aria-label="Community actions"] h1');
        this.joinButton = page.locator('[subscribe-label="Join"]');
        this.description = page.locator('#description');
        this.bellIcon = page.locator('[aria-label="Notification frequency menu"]');


    }
    async verifyElementsVisibleCommunityPage () {
        await expect(this.redditLogo).toBeVisible();
        await expect(this.searchIcon).toBeVisible();
        await expect(this.banner).toBeVisible();
        await expect(this.communityName).toBeVisible();
        await expect(this.joinButton).toBeVisible();
        await expect(this.description).toBeVisible();
    }

    async verifyJoinedCommunity () {
        await this.bellIcon.isVisible();
    }

    async joinCommunity () {
        await this.joinButton.click();
    }
}