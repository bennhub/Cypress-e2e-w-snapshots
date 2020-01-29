describe('Pik Addons FIFA', function() {
    it('Gets, types and visual tests', function() {

//Visits Home and begins to qual
cy.visit('/')
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_FIFA'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//visit internet 150 2yr PDP
cy.visit('/pik/addons')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
         .wait(2000) 

//Opens T &C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Pik Addons PLP");


//visit Pik Addon Apple TV 32gb
cy.visit('/product/apple-tv-4k-32gb')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens Details section
cy.contains('Details').click()
         .wait(2000)

//Opens Whats in the box
cy.contains("What’s in the box").click()
         .wait(2000) 

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
         .wait(2000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Pik Addons Apple TV 1Time");




    })
  })
  