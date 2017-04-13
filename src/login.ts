import { ElementFinder, browser, by, element } from 'protractor';

describe ('login to tiwar', () => {

    beforeAll(() => {
        browser.ignoreSynchronization = true;
    });

    beforeEach(() => {
        browser.manage().timeouts().pageLoadTimeout(10000);
    });

    let loginUrl: string = "https://www.tiwar.net/"

    it('testing title', () => {
        browser.get(loginUrl);
        const title = "Titan's War online | The best game for mobile phones ever";

        browser.getTitle().then((value) => {
            expect(value).toEqual(title);
        });
    });

    it('Login', () => {
        
    });

});