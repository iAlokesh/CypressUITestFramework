
class CommonTopBar{

    //WebElements

    elements = {
           
        mobilesLink: ($topBarMenu)=> cy.contains($topBarMenu)
}

    //Actions

    //Pass topBar menu name and click
    clickOnMobilesLink($topBarMenu){

       this.elements.mobilesLink($topBarMenu).click()
    }
}

export default new CommonTopBar()