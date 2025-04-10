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
        this.redditLogo = page.locator('a[href="/"]');
        this.communityPanel = page.locator('[aria-label="Community information"]');
        this.communityName = page.locator('a[data-click-id="subreddit"]');
        this.postTitle = page.locator('h1');
        this.postAuthor = page.locator('a[data-click-id="user"]');
        this.joinButton = page.locator('button[data-testid="subscribe-button"]');
        this.votesControl = page.locator('div[data-testid="upvote"], div[data-testid="downvote"]');
        this.commentsSection = page.locator('div[data-test-id="comment"]');
        this.shareIcon = page.locator('button[data-click-id="share"]');
    }

    async verifyElementsVisible () {
        await expect(this.redditLogo).toBeVisible();
        await expect(this.communityPanel).toBeVisible();
        await expect(this.communityName).toBeVisible();
        await expect(this.postTitle).toBeVisible();
        await expect(this.postAuthor).toBeVisible();
        await expect(this.joinButton).toBeVisible();
        await expect(this.votesControl).toBeVisible();
        await expect(this.commentsSection).toBeVisible();
        await expect(this.shareIcon).toBeVisible();
    }
        

}