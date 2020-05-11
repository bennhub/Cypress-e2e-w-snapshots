describe('Optik GWP', function() {
    it('Gets, types and visual tests', function() {

//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillCompassAddress() 
 
cy.visit('/')  
//visit internet 150 2yr PDP
cy.visit('/optik/gifts')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
         .wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Optik Gwp PLP");


//visit internet GWP Visa PDP
cy.visit('/product/500-visa')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
         .wait(2000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Optik Gwp Visa PDP");



    })
  })
  