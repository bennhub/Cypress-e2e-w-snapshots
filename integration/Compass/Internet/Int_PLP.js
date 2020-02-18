describe('Internet Plans', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit('/')
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
.type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
.wait(7000) 
   
//lands back on home page
//Go to internet plans 
cy.get('[data-qa=button-internet]').click()
.wait(2000)

Cypress.Cookies.debug(true)

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )

//Expand See More Section
cy.contains('See More').click()
.wait(2000)

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Int PLP ");


    })
  })
  