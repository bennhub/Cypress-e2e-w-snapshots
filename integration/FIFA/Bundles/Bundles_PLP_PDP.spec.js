describe('Bundles_FIFA', function() {
    it('Gets, types and visual tests', function() {
  
Cypress.config('defaultCommandTimeout')

//Visits Home and begins to qual
cy.visit('/')
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_FIFA'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//visit Bundles plans page
cy.get('[data-qa=button-bundle]').click()
.wait(2000)


//sets cookie to prevent purlple banner from appearing
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)


//Opens T & C section
cy.contains('View terms and conditions').click()
         //.wait(2000) 
 
       
//snapshots page for comparison
cy.matchImageSnapshot("bundPLP");


// Offers Element grid snap
cy.get('.style__OfferGrid-sc-1ad47ew-1').matchImageSnapshot('just-grid')

//visit Bundles Optik 7-1 + Int 150 PDP
cy.visit('/product/optik-7plus1-int150?bundle')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         //.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot();




    })
  })
  