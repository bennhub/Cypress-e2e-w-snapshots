
Cypress.Commands.add('fillCompassAddress', () => {
    cy.get('#autocomplete-form-address-google', {timeout: 3000})
    .type(Cypress.env('address_150'))
    cy.get('#autocomplete-form-submit').click()
      .wait(7000) 
    
    })

Cypress.Commands.add('fillFifaAddress', () => {
    cy.get('#autocomplete-form-address-google', {timeout: 3000})
    .type(Cypress.env('address_FIFA'))
    cy.get('#autocomplete-form-submit').click()
        .wait(7000) 
        
    })
 
 

