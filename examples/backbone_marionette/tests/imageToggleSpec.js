driver.sleep(1000).then(function(){
    var initialImage = driver.findElement(By.name('image'));
    driver.sleep(1000).then(function(){
        driver.findElement(By.name('new-todo')).sendKeys(webdriver.Key.ENTER);
    });

    driver.slepp(1000).then(function(){
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
});