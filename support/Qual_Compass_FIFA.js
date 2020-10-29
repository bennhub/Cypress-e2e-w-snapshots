

//Manual Compass Address FIll
Cypress.Commands.add('fillCompassAddress', () => {
  cy.get('[data-qa="button-addressHeader"]',{ timeout: 15000 }).first().click({force: true})
 //cy.get('#autocomplete-form-address-google', {force: true})
 cy.get('#street-address',{ timeout: 60000 }).click({force: true})
   .type(Cypress.env('address_150'), {force: true})
 cy.get('#autocomplete-form-submit', {force: true}).click()
   .wait(4000) 
})

//Manual FIFA Address Fill
Cypress.Commands.add('fillFifaAddress', () => {
  cy.get('[data-qa="button-addressHeader"]',{ timeout: 15000 }).first().click({force: true})
  //cy.get('#autocomplete-form-address-google', {timeout: 7000})
  cy.get('#street-address',{ timeout: 60000 }).click({force: true})
    .type(Cypress.env('address_FIFA'))
  cy.get('#autocomplete-form-submit').click()
    .wait(4000)
})
    



