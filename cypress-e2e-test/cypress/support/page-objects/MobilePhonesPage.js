import { expect } from "chai"

class MobilePhonesPage{

    //WebElements

    elements = {
           
        brandNameCheckbox: ($brandName)=>cy.contains('[dir="auto"]',$brandName),
        mobilePriceText: ($makeAndModelName)=> cy.contains($makeAndModelName)
                                                .parents('[data-cel-widget^="search_result_"]')
                                                .find('.a-price-whole'), 
        mobileLink: ($makeAndModelName)=> cy.contains($makeAndModelName)
}
    
    // Actions

    //Pass brandname of the mobile to check the checkbox
    checkMobileBrandCheckbox($brandName){

        this.elements.brandNameCheckbox($brandName).click() 
    }

    //Pass make and model and price to validate price of the mobile
    validateMobilePrice($makeAndModelName,$price){

        this.elements.mobilePriceText($makeAndModelName)
        .then(price=>{
            cy.wrap(price.text()).should('eq',$price)
        })
    }

    //Click on the mobile displayed in the search result page
    clickOnMobile(makeAndModelName){ 
        
        this.elements.mobileLink(makeAndModelName)
        .invoke('removeAttr','target')
        .then(ml=>{
             cy.wrap(ml).click() 
        })
    }
}

export default new MobilePhonesPage