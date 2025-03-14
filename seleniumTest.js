const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testGoogle() {
  const options = new chrome.Options();
  options.addArguments('--headless', '--disable-gpu', '--no-sandbox');

  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    await driver.sleep(2000);
    console.log('Page title is:', await driver.getTitle());
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await driver.quit();
  }
}

testGoogle();
