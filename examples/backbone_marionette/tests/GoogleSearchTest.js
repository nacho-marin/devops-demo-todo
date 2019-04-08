const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com/ncr') //ncr = No Country Redirection
    .then(_ => driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
    .then(_ => driver.wait(driver.getTitle().then(function(title) {
            if(title === 'webdriver - Google Search') {
                  console.log('Test passed');
            } else {
                  console.log('Test failed');
            } 
        })))
    .then(_ => driver.quit());