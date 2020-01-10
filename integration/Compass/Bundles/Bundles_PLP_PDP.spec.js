describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {
  
Cypress.config('defaultCommandTimeout')

//Visits Home and begins to qual
cy.visit(Cypress.env('baseUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//visit internet Addons PLP
cy.visit('https://www.telus.com/en/shop/home/bundle/plans')


//Opens T & C section
cy.contains('View terms and conditions').click()
         //.wait(2000) 
 
 //Opens T & C section//
//cy.contains('Gift With Purchase').click()
//.wait(2000)         
 
//snapshots page for comparison
//cy.compareSnapshot("bundles PLP");
cy.matchImageSnapshot("bundPLP");
//cy.percySnapshot("Bundles PLP");

// Offers grid snap
cy.get('.style__OfferGrid-sc-1ad47ew-1').matchImageSnapshot('just-grid')

//visit Bundles Optik 7-1 + Int 150 PDP
//cy.visit('https://www.telus.com/en/shop/home/product/optik-7plus1-int150?bundle')

//Opens T & C section
//cy.contains('View terms and conditions').click()
         //.wait(2000) 

//snapshots page for comparison
//cy.compareSnapshot("bundles PDP");
//cy.matchImageSnapshot();
//cy.percySnapshot("bundles PDP");




    })
  })
  