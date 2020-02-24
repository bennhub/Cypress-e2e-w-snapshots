describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit('/')
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
         .wait(7000) 

       
//Bundle PDP Compass Qual

//******Bundles Optik 7-1 + Int 150 PDP
cy.visit('/product/essentials-int75?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.get('.StyledClickable-lxf9hd-0')
.should('be.visible', { timeout: 5000 })
.click()

//snapshots page for comparison
cy.matchImageSnapshot("essentials-int75?bundle PDP");

//Add to Cart
cy.get('[data-qa=button-addToCart-essentials-int75').click()
.wait(2000)

//Add to Cart
cy.get('[data-qa=skip-channel').click()
.wait(2000)

//Add to Cart
cy.contains('Continue').click()
.wait(4000)

  // match element snapshot
  cy.get('.style__SummaryViewWrapper-f2hcs8-0 > .cDdDZl').matchImageSnapshot("panel summary")

//Add to Cart
cy.get('[data-qa=review-cart').click()
.wait(2000)

//snapshots page for comparison
cy.matchImageSnapshot("essentials-int75?bundle Cart page");


})
})