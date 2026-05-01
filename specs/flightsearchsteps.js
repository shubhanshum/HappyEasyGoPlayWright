const {Given, When, Then}=require ('@cucumber/cucumber')
const {LandingPage}=require ('../pageobjects/LandingPage')
const {FlightDetailsPage}=require ('../pageobjects/FlightDetailsPage')

let landingPage;
let flightDetailsPage;

When('user enters {string} in {string} text field', async function(cityName,fieldName){
    
    switch(cityName.toUpperCase()){
        case "MUMBAI":
            await this.landingPage.enterDepartureCity(cityName);
        break;
        case "DELHI":
            await this.landingPage.enterArrivalCity(cityName);
        break;
        default:
            throw new Error(cityName+" is not defined");
    }
    
    
});


When('user clicks on {string} button', async function(buttonName){
    switch(buttonName.toUpperCase()){
        case "SEARCH":
            await this.landingPage.clickOnSearchButton();
            break;
        default:
            throw new Error(buttonName+" is not defined")    
    }
});

Then('user sees a list of flights',async function(){
    this.flightDetailsPage = new FlightDetailsPage(this.page);
    //await this.flightDetailsPage.getAllFlightNumbers();
    //await this.flightDetailsPage.getAllPrices();
})

When('user filters result based on cheapest airline available', async function(){
    this.flightDetailsPage = new FlightDetailsPage(this.page);
    await this.flightDetailsPage.selectCheapestAirlineCheckbox();
})

When('user prints the price of cheapest flight', async function(){
    const chaepestFlightPrice=await this.flightDetailsPage.printCheapestFlightPrice();
    console.log('Cheapest price is:'+chaepestFlightPrice);
})

