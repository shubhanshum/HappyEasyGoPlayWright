const config = require('../utils/config');

class LandingPage{
    constructor(page){
        this.page=page;
        this.departureTextBox='input#D_city';
        this.arrivalTextBox='input#A_city';
        this.searchButton="[class='sfp-submit']";
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
        await this.page.click(this.searchButton);
    }
}

module.exports = { LandingPage };