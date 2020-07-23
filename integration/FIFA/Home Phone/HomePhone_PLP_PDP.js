describe('Home Phone FIFA', function() {
    it('Gets, types and visual tests', function() {
      
cy.visit('/')//Visit base url then qual compass
  .contains('Get started').click()
  .fillFifaAddress() 
cy.visit('/')//lands back on home page
cy.get('[data-qa=button-home-phone]').click()//Go to HomePhone plans 
  .wait(4000)
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
  .wait(3000)
cy.matchImageSnapshot("HomePhone_PLP_FIFA");//snapshots page for comparison
cy.visit('/product/home-phone-lite')//Bundles pik-tv-and-internet-150
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
  .wait(3000)
cy.window().contains('View terms and conditions').click()//Opens T & C section
  .wait(2000) 
cy.matchImageSnapshot("HomePhoneLite_PDP_FIFA");//snapshots page for comparison
cy.visit('/product/home-phone')//Bundles essentials-int15-500-visa
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
  .wait(3000)
cy.window().contains('View terms and conditions').click()//Opens T & C section
  .wait(2000) 
cy.matchImageSnapshot("HomePhone_PDP_FIFA");//snapshots page for comparison
  })
})
  