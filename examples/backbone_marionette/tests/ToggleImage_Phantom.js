const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open('http://localhost:8080');
    
    if (status !== "success") {
        throw new Error("The web server is not available");
    }
    console.log(status);
    
    await instance.exit();
}());