describe('Home Phone', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillCompassAddress()
   
//lands back on home page
//Go to HomePhone plans 
cy.get('[data-qa=button-home-phone]').click()
.wait(2000)

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)        
 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparisons
cy.matchImageSnapshot("Homephone PLP")

})
})