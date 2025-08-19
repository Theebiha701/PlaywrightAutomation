const { expect } = require("@playwright/test");

exports.OpenAnAccount = 
class OpenAnAccount{
    constructor(page){
        this.page = page;
        this.purpleTransactorTitle = this.page.locator("//h1[contains(text(),'Purple Transactor Account.')]");
        this.openAnAccountButton = this.page.locator('//a[text()="Open an account"]');
        this.activateYourCardButton = this.page.locator('//a[text()="Activate your card"]');

    }


    async ValidateOpenAnAccountPageContent(){
        await expect(this.purpleTransactorTitle).toBeVisible();
        await expect(this.openAnAccountButton).toBeVisible();
        await expect(this.activateYourCardButton).toBeVisible();
    
    }

}