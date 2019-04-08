const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost:8080')
    .then(_ => driver.wait(driver.getTitle()))
    .then(_ => driver.findElement(By.name('new-todo')).sendKeys('Tarea 1'))
    .then(_ => driver.findElement(By.name('new-todo')).sendKeys(Key.RETURN))
    .then(_ => driver.quit());