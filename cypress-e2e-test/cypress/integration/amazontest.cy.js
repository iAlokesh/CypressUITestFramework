/// <reference types="Cypress" />

import { expect } from "chai"
import commonTopBar from "../support/page-objects/CommonTopBar"
import mobilePhonesPage from "../support/page-objects/MobilePhonesPage"
import productPage from "../support/page-objects/ProductPage"
import testdata from "../fixtures/testdata.json"

describe('Amazon Test Suite',()=>{

    beforeEach('Open Amazon Website',()=>{
     
        cy.OpenAmazonHomePage()

        cy.fixture('testdata').then((testdata)=>{

            testdata = testdata
        })
    })

    it.only('Amazon Brandname Checkboxes Test',()=>{
    
        commonTopBar.clickOnMobilesLink(testdata.topBarMenuLink) //Click on Mobiles link in the home page

        mobilePhonesPage.validateTheCountAndTheOrderOfTheBrandsCheckBoxes(testdata.numberOfBrandsCheckboxes,testdata.brandCheckBoxes) //Validate the number and order of the mobile brand name checkboxes 

        testdata.brandCheckBoxes.forEach((brandName)=>{

            mobilePhonesPage.checkMobileBrandCheckbox(brandName) //check brand name checkbox
        })
    })

    it('Amazon Test',()=>{

        commonTopBar.clickOnMobilesLink(testdata.topBarMenuLink) //Click on Mobiles link in the home page

        mobilePhonesPage.checkMobileBrandCheckbox(testdata.mobileBrandName) //check brand name checkbox
        
        mobilePhonesPage.validateMobilePrice(testdata.mobileModelName,testdata.validateMobilePriceValue) //validate the price of model
        
        mobilePhonesPage.clickOnMobile(testdata.mobileModelName) //Open product page
        
        productPage.validateMobilePriceInProductPage(testdata.validateMobilePriceInProductPageValue) //validate the price of the model in product page
    })
})