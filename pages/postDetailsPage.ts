import { Page, Locator, expect } from '@playwright/test';

export class PostDetailsPage {
    readonly page: Page;
    readonly redditLogo: Locator;
    readonly communityPanel: Locator;
    readonly communityName: Locator;
    readonly postTitle: Locator;
    readonly postAuthor: Locator;
    readonly joinButton: Locator;
    readonly votesControl: Locator;
    readonly commentsSection: Locator;
    readonly shareIcon: Locator;

    constructor (page: Page) {
        if (!page) {
            throw new Error('Page object is not defined!');
          }
        this.page = page;
        this.redditLogo = page.locator('#reddit-logo');
        this.communityPanel = page.locator('[aria-label="Community information"]');
        this.communityName = page.locator('a[data-click-id="subreddit"]');
        this.postTitle = page.locator('[slot="title"]');
        this.postAuthor = page.locator('[source="post_credit_bar"]');
        this.joinButton = page.locator('.button-primary[data-post-click-location="join"]');
        this.votesControl = page.locator('div[data-testid="upvote"]');
        this.commentsSection = page.locator('div[data-test-id="comment"]');
        this.shareIcon = page.locator('button[data-click-id="share"]');
    }

    async verifyElementsVisible () {
        await expect(this.redditLogo).toBeVisible();
        await expect(this.communityPanel).toBeVisible();
        const author = this.postAuthor.first();
        await expect(author).toBeVisible();
        await expect(this.joinButton).toBeVisible();
    }
        
    async verifyPostPageURL () {
        const url = this.page.url();
        const redditUrlPattern = /^https:\/\/www\.reddit\.com\/r\/[^\/]+\/comments\/[^\/?]+/;
        expect(url).toMatch(redditUrlPattern);
    }

}