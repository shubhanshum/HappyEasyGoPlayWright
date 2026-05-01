const {Given} =require ('@cucumber/cucumber');
const {LandingPage}=require ('../pageobjects/LandingPage')

let landingPage;

Given('user is on {string} page', async function(pageName){
    switch(pageName.toUpperCase()){
        case "HOME":
        this.landingPage=new LandingPage(this.page);
        await this.landingPage.goto();
        break;
        default:
            throw new Error("Page name is not defined")
    }
})