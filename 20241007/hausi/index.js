import { Browser, Builder } from "selenium-webdriver";
import fs from "fs";

let screenShotPath = "./screenshots";
if (!fs.existsSync(screenShotPath)) {
    fs.mkdirSync(screenShotPath);
}

const driver = new Builder().forBrowser(Browser.CHROME).build();
driver.get("https://the-internet.herokuapp.com/login").then(() => {
    const usernameInput = driver.findElement({ id: "username" });
    const passwordInput = driver.findElement({ id: "password" });
    const submitButton = driver.findElement({
        xpath: '//*[@id="login"]/button',
    });

    usernameInput.sendKeys("tomsmith");
    passwordInput.sendKeys("SuperSecretPassword!");
    submitButton.click();

    setTimeout(() => {
        driver.takeScreenshot().then((data) => {
            fs.writeFileSync(
                `${screenShotPath}/login.png`,
                data,
                "base64",
                (err) => {
                    if (err) {
                        console.log(err);
                    }
                }
            );
        });
    }, 2000);
    setTimeout(() => {
        driver.quit();
    }, 5000);
});
