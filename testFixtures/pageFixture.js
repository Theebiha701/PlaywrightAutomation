const base = require('../testFixtures/browserFixture');
const {HomePage} = require('../pages/HomePage');
const {OpenAnAccount} = require('../pages/OpenAnAccount');

exports.test = base.test.extend({
    homePage: async ({browserPage}, use) =>{
        console.log("In Login Page Fixture");
        await use(new HomePage(browserPage.page));
    },
    openAnAccounPage: async ({browserPage}, use) =>{
        console.log("In Login Page Fixture");
        await use(new OpenAnAccount(browserPage.page));
    }
});
exports.expect = base.expect;