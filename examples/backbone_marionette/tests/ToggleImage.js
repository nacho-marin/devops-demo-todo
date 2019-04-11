const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('chrome')
    .build();
    var initialImage;
    var initialImageSrc='';
    var finalImage;
    var finalImageSrc=''

driver.get('http://localhost:8080')
    .then(_ => driver.wait(driver.getTitle()))
    .then(_ => driver.wait(driver.findElement(By.name('image')).then(
        function(){
            initialImage = driver.findElement(By.name('image'));
            initialImage.getAttribute('src').then(function(src) {initialImageSrc=src;});
        },
        function (err) {
            if (err.name === "NoSuchElementError"){
                console.log("Test failed");
            }
        }
    )))
    .then(_ => driver.findElement(By.name('new-todo')).sendKeys('Tarea 1'))
    .then(_ => driver.findElement(By.name('new-todo')).sendKeys(Key.RETURN))
    .then(_ => driver.sleep(2000).then(
        function(){
            finalImage = driver.findElement(By.name('image'));
            finalImage.getAttribute('src').then(function(src) {finalImageSrc=src;});
            }
        )   
    )
    .then(_ =>driver.then(function(){
        if(finalImageSrc!== initialImageSrc){
            console.log(initialImageSrc);
            console.log(finalImageSrc);
            console.log('Test passed');
        }else{
            console.log('Test failed');
        }
    }))
    .then(_ => setTimeout(function () {driver.quit()}, 100));