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
  cy.get('[data-qa=button-internet]').compareSnapshot('just-button')
  


  

  
  
  
  
 
    
  


    

        
      
     
  
    })
  })
  