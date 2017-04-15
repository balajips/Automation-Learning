import { browser } from 'protractor';

class Util {
    constructor () {

    }

    waitForPageLoad (seconds:number) {
        browser.sleep(seconds*1000);
    }
}

export { Util };