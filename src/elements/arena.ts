import { ElementFinder, browser, by, element } from 'protractor';
import { Util } from 'common/util';

class Arena {
    private arenaLinkInMainPage:string;

    constructor () {
        this.arenaLinkInMainPage = '//a[@href="/arena/"]';
    }

    playArena () {
        this.gotoArena ();
    }

    private gotoArena () {
        let arenaLinkElemenet = element(by.xpath(this.arenaLinkInMainPage));
        arenaLinkElemenet.click();
    }
}