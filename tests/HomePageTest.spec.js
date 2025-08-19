import {test,expect} from '../testFixtures/pageFixture';

test('Home Page', async({homePage,openAnAccounPage}) => {
    await homePage.navigateToBeyond();
    await homePage.ValidateHomePageTabs();
    await homePage.NavigateToOpenAnAccount();
    await openAnAccounPage.ValidateOpenAnAccountPageContent();
})