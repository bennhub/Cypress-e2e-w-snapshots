describe('Pik Addons FIFA', function() {
    it('Gets, types and visual tests', function() {

//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillFifaAddress()
 
  
  cy.visit('/')
//visit internet 150 2yr PDP
cy.visit('/pik/addons')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens FAQ section
cy.window().contains('Frequently Asked Questions').click()
         .wait(2000) 

//Opens T &C section
cy.window().contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Pik Addons PLP");


//visit Pik Addon Apple TV 32gb
cy.visit('/product/apple-tv-4k-32gb')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens Details section
cy.window().contains('Details').click()
         .wait(2000)

//Opens Whats in the box
cy.window().contains("What’s in the box").click()
         .wait(2000) 

//Opens FAQ section
cy.window().contains('Frequently Asked Questions').click()
         .wait(2000)

//Opens T & C section
cy.window().contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Pik Addons Apple TV 1Time");




    })
  })
  