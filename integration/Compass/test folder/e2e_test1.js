describe('Home', function() {
    it('Gets, types and visual tests', function() {

  //Compass qual from Home 
    
  cy.visit(Cypress.env('baseUrl'))

  //snapshots page for comparison
  //cy.compareSnapshot('baseURL', 0.0);
  //cy.compareSnapshot('baseURL', 0.1);
  
  //Clicks on get started
  //cy.contains('Get started').click()

  //Quals Compass address

  //cy.get('#autocomplete-form-address-google')
        //.type(Cypress.env('address_150'))
  
  //cy.contains('Check availability').click()
        // .wait(7000) 
   
  //lands back on home page
  //Go to internet plans 
  cy.get('[data-qa=button-internet]').click()
  .wait(2000)

  cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
  .wait(3000)
 
  //cy.get('[style="position: absolute; z-index: 2000000004; width: 27px; height: 27px; background-color: transparent; border-width: 0px; border-color: rgb(51, 51, 51); border-style: solid; border-radius: 0px; display: block; left: 850px; bottom: 71px; cursor: pointer;"] > div > img').click();


  
    })
  })
  