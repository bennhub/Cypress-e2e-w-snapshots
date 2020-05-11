describe('Pik Channels FIFA', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillFifaAddress()
 
  
  cy.visit('/')
//lands back on home page
//Go to Pik plans 
cy.get('[data-qa=button-pik]').click()
.wait(2000)

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

   
//visit pik channels
cy.visit('/pik/channels')
.wait(3000) 

//Click on Language filter
cy.contains('Language').click()
.wait(2000) 
// optik Language filter snap
cy.get(':nth-child(1) > .style__Overlay-sc-1cjw4jg-2').matchImageSnapshot('Language filter')

//Click on category filters
cy.contains('Category').click()
.wait(2000) 
// optik category filter snap
cy.get(':nth-child(2) > .style__Overlay-sc-1cjw4jg-2').matchImageSnapshot('Category filter')

//Opens FAQ
cy.contains('Frequently Asked Questions').click()
.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Pik Channels");


    })
  })
  