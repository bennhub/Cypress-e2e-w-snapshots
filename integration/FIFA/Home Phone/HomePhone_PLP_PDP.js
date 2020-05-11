describe('Home Phone FIFA', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillFifaAddress() 
   
//lands back on home page
cy.visit('/')
//Go to HomePhone plans 
cy.get('[data-qa=button-home-phone]').click()
.wait(4000)

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)
 
//snapshots page for comparison
cy.matchImageSnapshot("HomePhone_PLP_FIFA");

//*******Bundles pik-tv-and-internet-150
cy.visit('/product/home-phone-lite')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("HomePhoneLite_PDP_FIFA");


//*******Bundles essentials-int15-500-visa
cy.visit('/product/home-phone')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("HomePhone_PDP_FIFA");


    })
  })
  