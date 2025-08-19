const { expect } = require("@playwright/test");

exports.HomePage = 
class HomePage{
    constructor(page){
        this.page = page;
        this.bankAndSaveTab = this.page.locator('//a[@data-menu="Bank & Save"]');
        this.lendingTab = this.page.locator('//a[@data-menu="Lending"]');
        this.insuranceTab = this.page.locator('//a[@data-menu="Insurance"]');
        this.businessTab = this.page.locator('//a[@data-menu="Business"]');
        this.communitySectorTab = this.page.locator('//a[@data-menu="Community Sector"]');
        this.ourImpactTab = this.page.locator('//a[@data-menu="Our Impact"]');
        this.openAnAccountOption = this.page.locator('//a[text()="Open an Account"]');

    }

    async navigateToBeyond(){
        await this.page.goto('https://www.beyondbank.com.au/');
    }

    async ValidateHomePageTabs(){
        await expect(this.page).toHaveURL('https://www.beyondbank.com.au/');
        await expect(this.page).toHaveTitle('Beyond Bank: Personal, Business and Community Sector Banking | Beyond Bank');
        await expect(this.bankAndSaveTab).toBeVisible();
        await expect(this.lendingTab).toBeVisible();
        await expect(this.insuranceTab).toBeVisible();
        await expect(this.businessTab).toBeVisible();
        await expect(this.communitySectorTab).toBeVisible();
        await expect(this.ourImpactTab).toBeVisible();
    }

    async NavigateToOpenAnAccount(){
        await this.bankAndSaveTab.hover();
        await this.openAnAccountOption.click();
    }
}