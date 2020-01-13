describe('Home Phone FIFA', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit(Cypress.env('baseUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_FIFA'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//lands back on home page
//Go to HomePhone plans 
cy.get('[data-qa=button-home-phone]').click()
        .wait(4000)
 
// Should be on a new URL which includes '/home-phone/plans'
cy.url().should('eq','https://order.fibre.telus.com/digital/select?LPDSID=13755022&RDRProduct=HP');

//snapshots page for comparison
//cy.matchImageSnapshot("HomePhoneFIFA");



    })
  })
  