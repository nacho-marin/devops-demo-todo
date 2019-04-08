var webdriver = require('selenium-webdriver'),By = webdriver.By,until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();
//Using get() method to open a webpage
driver.get("http://localhost:8080");
driver.sleep(1000);
var initialImage = driver.findElement(By.name('image'));
var initialImageSrc = '';
var finalImageSrc ='';

driver.sleep(1000).then(function(){
    driver.findElement(By.name('new-todo')).sendKeys(webdriver.Key.ENTER);
    
});

driver.sleep(9000).then(function(){
    var finalImage = driver.findElement(By.name('image'));
    finalImage.getAttribute('src').then(function(src) {finalImageSrc=src;});
});

driver.sleep(2000).then(function(){
    if(finalImageSrc!== initialImageSrc){
        console.log(initialImageSrc);
        console.log(finalImageSrc);
        console.log('Test passed');
    }else{
        console.log('Test failed');
    }
});

driver.quit();