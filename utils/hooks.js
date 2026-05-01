const {Before, After, setDefaultTimeout} =require ('@cucumber/cucumber');
const {chromium} =require ('@playwright/test');

setDefaultTimeout(70 * 1000);

Before(async function(){
    this.browser = await chromium.launch({ headless: false });
    const context=await this.browser.newContext();
    this.page=await context.newPage();
});

After(async function(){
    await this.page.close();
    await this.browser.close();
})