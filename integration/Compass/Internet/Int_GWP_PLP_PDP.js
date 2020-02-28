describe('Internet Plans', function() {
    it('Gets, types and visual tests', function() {

//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillCompassAddress() 
   
//visit internet 150 2yr PDP
cy.visit('/internet/gifts')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens FAQ section
//cy.contains('Frequently Asked Questions').click()
         //.wait(2000) 

//Opens T &C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
//cy.compareSnapshot("Int Gwp PLP");
cy.matchImageSnapshot("Int Gwp PLP");


//visit internet GWP Visa PDP
cy.visit('/product/200-visa')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
//cy.compareSnapshot("Int Gwp Visa PDP");
cy.matchImageSnapshot("Int Gwp Visa PDP");




    })
  })
  