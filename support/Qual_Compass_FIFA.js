

//Manual Compass Address FIll
Cypress.Commands.add('fillCompassAddress', () => {
 //cy.visit('/shop/eligibility')//Qual Compass
 //  .wait(4000)
 cy.get('#autocomplete-form-address-google', {force: true})
   .type(Cypress.env('address_150'), {force: true})
 cy.get('#autocomplete-form-submit', {force: true}).click()
   .wait(4000) 
})

//Manual FIFA Address Fill
Cypress.Commands.add('fillFifaAddress', () => {
  cy.get('#autocomplete-form-address-google', {timeout: 7000})
    .type(Cypress.env('address_FIFA'))
  cy.get('#autocomplete-form-submit').click()
    .wait(4000)
})
    



