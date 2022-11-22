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

    it.only('Amazon Test',()=>{

        commonTopBar.clickOnMobilesLink(testdata.topBarMenuLink) //Click on Mobiles link in the home page

        mobilePhonesPage.checkMobileBrandCheckbox(testdata.mobileBrandName) //check brand name checkbox
        
        mobilePhonesPage.validateMobilePrice(testdata.mobileModelName,testdata.validateMobilePriceValue) //validate the price of model
        
        mobilePhonesPage.clickOnMobile(testdata.mobileModelName) //Open product page
        
        productPage.validateMobilePriceInProductPage(testdata.validateMobilePriceInProductPageValue) //validate the price of the model in product page
    })
})