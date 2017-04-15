import { ElementFinder, browser, by, element } from 'protractor';

describe ('login to tiwar', () => {
    var userName;
    var password;

    beforeAll(() => {
        browser.ignoreSynchronization = true;
        userName = browser.params.userName;
        password = browser.params.password;
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

    function waitForPageLoad (seconds:number) {
        browser.sleep(seconds*1000);
    }

    it('Login', () => {
        let signInButton = element(by.xpath('//span[text()="Sign In"]'));
        signInButton.click();
        waitForPageLoad(2);
        loggingIn ();
        waitForPageLoad(5);
    });

    function loggingIn () {
        let userNameLabel = element(by.name('login'));
        let passwordLabel = element(by.name('pass'));
        let signInLabel = 'Sign In';
        let signInXpath = "//input[@value='"+signInLabel+"']";
        console.log("signIn Xpath is : " + signInXpath);
        let signInButton = element(by.xpath(signInXpath));
        userNameLabel.sendKeys(userName);
        passwordLabel.sendKeys(password);
        signInButton.click();
        waitForPageLoad(5);
    }

});