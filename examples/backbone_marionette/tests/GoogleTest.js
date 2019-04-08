var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://www.google.com');

setTimeout(function(){driver.findElement(By.name('q')).sendKeys('webdriver');}, 5000);

setTimeout(function(){driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER);},5000);

setTimeout(function(){
    driver.getTitle().then(function(title) {
        if(title === 'webdriver') {
              console.log('Test passed');
        } else {
              console.log('Test failed');
        } 
    });
},10000);

setTimeout(function () {driver.quit()}, 5000);