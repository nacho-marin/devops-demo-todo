const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open('http://localhost:8080');
    console.log(status);
    await instance.exit();
}());