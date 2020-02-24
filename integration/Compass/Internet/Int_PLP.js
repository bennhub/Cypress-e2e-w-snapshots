describe('Internet Plans', function() {
    it('Gets, types and visual assertion', function() {


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


//Error messaging ineligible plan visble
cy.contains("We're working on getting PureFibre to your area.").should('be.visible')
.wait(2000)

//Error messaging ineligible plan visble close
cy.get('.StyledInteractiveIconButton-sc-1phwvk2-0').click()

//Expand See More Section
cy.contains('See more plans').click()
.wait(2000)

//click view details drop for 2 year term
cy.get('[data-qa=link-details-internet-25-24]').click()
cy.get('[data-qa=link-details-internet-75-24]').click()
cy.get('[data-qa=link-details-internet-150-30-24]').click()
cy.get('[data-qa=link-details-internet-15-24]').click()

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snap full page exposure for 2 year term
cy.matchImageSnapshot("Int plans 2yr");

//uncheck to see no-term plan
cy.get('[data-qa=checkbox-internet-25-24]').click()
cy.get('[data-qa=checkbox-internet-75-24]').click()
cy.get('[data-qa=checkbox-internet-150-30-24]').click()
cy.get('[data-qa=checkbox-internet-15-24]').click()


//click view details drop for no term
cy.get('[data-qa=link-details-internet-25-0]').click()
cy.get('[data-qa=link-details-internet-75-0]').click()
cy.get('[data-qa=link-details-internet-150-30-0]').click()
cy.get('[data-qa=link-details-internet-15-0]').click()


//snap full page exposure for no -term
cy.matchImageSnapshot("Int plans no term");




    })
  })
  