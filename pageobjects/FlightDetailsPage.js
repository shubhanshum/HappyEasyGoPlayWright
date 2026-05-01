const {expect}=require ('@playwright/test')

class FlightDetailsPage{
    constructor(page){
        this.page=page;
        this.flightNumbers=page.locator("[class*='flight-title']");
        this.prices=page.locator("[class='price-from-second']");
        this.airlineCheckbox=page.locator("//div[@class='airlines']//span[@class='lowest-price']");
    }

    async getAllFlightNumbers(){
        await this.page.waitForLoadState('domcontentloaded');
        const flights=await this.flightNumbers.allTextContents();
        console.log(flights);
    }

    async getAllPrices(){
        const prices=await this.prices.allTextContents();
        console.log(prices);
    }

    async selectCheapestAirlineCheckbox(){
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.airlineCheckbox.first()).toBeVisible();
        await this.airlineCheckbox.first().click();
    }

    async printCheapestFlightPrice(){
        await this.prices.first().waitFor();
        let cnt=await this.prices.count();
        let lprice=0;

        for (let i=0;i<cnt;i++){
            let flight1Price=await this.prices.nth(i).textContent();
            flight1Price=flight1Price.replace(/[^0-9]/gi,'');
            flight1Price=Number(flight1Price); //converting string to number
            for (let j=i+1;j<cnt;j++){
                let flight2Price=await this.prices.nth(j).textContent();
                flight2Price=flight2Price.replace(/[^0-9]/gi,'');
                flight2Price=Number(flight2Price);
                if (flight1Price>flight2Price){
                    lprice=flight2Price;
                }else{
                    lprice=flight1Price;
                }
            }
        }
        return lprice;
    }
}
module.exports ={FlightDetailsPage};