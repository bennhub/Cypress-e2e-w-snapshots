describe('Internet xpress checkout FIFA', function() {
    it('Gets, types and visual tests', function() {

//Visits Home and begins to qual
cy.visit('/')

//Go to internet plans 
cy.get('[data-qa=button-internet]').click()
.wait(2000)

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//snapshot order now page
cy.matchImageSnapshot("Int Order Now PLP");

//Click Order Now button
cy.get('[data-qa=button-internet-150-150-24]').click()
.wait(2000)

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_FIFA'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//snapshots page for comparison
cy.matchImageSnapshot("Int Xpress checkout page");



    })
  })
  