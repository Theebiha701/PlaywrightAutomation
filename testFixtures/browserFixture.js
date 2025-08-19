const browserFixture = require('@playwright/test');

exports.test = browserFixture.test.extend({
    browserPage: async({browser}, use) =>{
        const context = await browser.newContext();
        const page = await context.newPage({});
        await use({page,context});
        await context.close();
    }
});
exports.expect = browserFixture.expect;