import { expect } from "chai"
import 'cypress-wait-until';

class MobilePhonesPage{

    //WebElements

    elements = {
           
        brandNameCheckbox: ($brandName)=>cy.contains('span[class="a-size-base a-color-base"]',$brandName),
        mobilePriceText: ($makeAndModelName)=> cy.contains($makeAndModelName)
                                                .parents('[data-cel-widget^="search_result_"]')
                                                .find('.a-price-whole'), 
        mobileLink: ($makeAndModelName)=> cy.contains($makeAndModelName),
        brandNameCheckboxes: ()=> cy.get('#s-refinements>div:nth-child(5)>ul>li')
                         
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
            cy.wrap(price.text().replace(/[^\w\s]/gi, '')).should('eq',$price)
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

    //Validate the number of checkboxes and the order of the checkboxes for Mobiles brand
    validateTheCountAndTheOrderOfTheBrandsCheckBoxes(numberOfBrands, expectedBrandsNameInOrder){

        this.elements.brandNameCheckboxes()
        .each((item,index,list)=>{
           expect(list).to.have.length(numberOfBrands)
           cy.waitUntil(() => cy.wrap(item)
            .should("contain.text",expectedBrandsNameInOrder[index])
          )
        }) 
    }
}

export default new MobilePhonesPage