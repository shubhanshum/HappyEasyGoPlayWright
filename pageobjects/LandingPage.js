const config = require('../utils/config');
const { LocatorHelper } = require('../utils/LocatorHelper');

class LandingPage{
    constructor(page){
        this.page=page;
        this.helper=new LocatorHelper(page);
        this.departureTextBox='input#D_city';
        this.arrivalTextBox='input#A_city';
        this.searchButton=[
            {type: 'css' , value: "[class='sfp-submit']"},
            {type: 'text' , value: 'Search'}
        ];
    }

    async goto(){
        await this.page.goto(config.baseURL);
    }

    async enterDepartureCity( departureCity){
        await this.page.fill(this.departureTextBox,departureCity)
    }

    async enterArrivalCity( arrivalCity){
        await this.page.fill(this.arrivalTextBox,arrivalCity)
    }

    async clickOnSearchButton(){
        await (await this.helper.findLocator(this.searchButton)).click();
    }
}

module.exports = { LandingPage };