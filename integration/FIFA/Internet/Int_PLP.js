describe('Internet Plans', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit('/')
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
.type(Cypress.env('address_FIFA'))
  
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
cy.contains('See more plans').click()
.wait(2000)

//click view details drop for 2 year term
cy.get('[data-qa=link-details-internet-150-150-24]').click()
cy.get('[data-qa=link-details-internet-300-300-24]').click()
cy.get('[data-qa=link-details-gigabit-internet-24]').click()
cy.get('[data-qa=link-details-internet-750-750-24]').click()
cy.get('[data-qa=link-details-internet-75-75-24]').click()
cy.get('[data-qa=link-details-internet-25-25-24]').click()

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snap full page exposure for 2 year term
cy.matchImageSnapshot("Int plans 2yr");

//uncheck to see no-term plan
cy.get('[data-qa=checkbox-internet-150-150-24]').click()
cy.get('[data-qa=checkbox-internet-300-300-24]').click()
cy.get('[data-qa=checkbox-gigabit-internet-24]').click()
cy.get('[data-qa=checkbox-internet-750-750-24]').click()
cy.get('[data-qa=checkbox-internet-75-75-24]').click()
cy.get('[data-qa=checkbox-internet-25-25-24]').click()


//click view details drop for no term
cy.get('[data-qa=link-details-internet-150-150-0]').click()
cy.get('[data-qa=link-details-internet-300-300-0]').click()
cy.get('[data-qa=link-details-gigabit-internet-0]').click()
cy.get('[data-qa=link-details-internet-750-750-0]').click()
cy.get('[data-qa=link-details-internet-75-75-0]').click()
cy.get('[data-qa=link-details-internet-25-25-0]').click()


//snap full page exposure for no -term
cy.matchImageSnapshot("Int plans no term");




    })
  })
  