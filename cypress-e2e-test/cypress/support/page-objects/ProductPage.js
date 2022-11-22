class ProductPage{

    //Elements

    elements={
           mobilePrice: ()=> cy.get('#productTitle')
                        .parents('#centerCol')
                        .find('.a-price-whole')
    }

    //Actions
    
    //Validate price of the product in the product page
    validateMobilePriceInProductPage($mobilePrice){

        this.elements.mobilePrice().invoke('text')
        .then(text=>
           cy.wrap(text.replaceAll(/[&\/\\#, +()$~%.'":*?<>{}]/g, '')).should('eq',$mobilePrice)
        )
    }
}

export default new ProductPage()