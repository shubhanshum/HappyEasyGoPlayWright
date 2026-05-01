class LocatorHelper{
    constructor(page){
        this.page=page;
    }
    
    async findLocator(locators=[]){
        for(const loc of locators){
            let locator;
            switch(loc.type){
                case 'css':
                    locator=this.page.locator(loc.value);
                    break;
                case 'xpath':
                    locator=this.page.locator(loc.value);
                    break;
                case 'text':
                    locator=this.page.getByText(loc.value);
                    break;
                case 'label':
                    locator=this.page.getByLabel(loc.value);
                    break;
                default:
                    throw new Error(`Unsupported locator type: ${loc.type}`);
            }
            if (await locator.count() > 0) {
                return locator;
            }
        }
        throw new Error('No locator matched from provided values');
    }
}

module.exports={LocatorHelper};