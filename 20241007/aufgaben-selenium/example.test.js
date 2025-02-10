import { Browser, Builder } from "selenium-webdriver";
import { expect } from "chai";
async function sleep(ms) {
    return new Promise(async (resolve) => setTimeout(resolve, ms));
}
describe("example", function () {
    this.timeout(5000);
    let driver;
    beforeEach(async () => {
        driver = new Builder().forBrowser(Browser.CHROME).build();
    });
    afterEach(async () => {
        await driver.quit();
    });

    it("open example.com inbrowser", async () => {
        await driver.get("https://example.com");
        const title = await driver.getTitle();
        await sleep(1000);

        expect(title).to.equal("Example Domain");
    });
});
