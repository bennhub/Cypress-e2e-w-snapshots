describe('Internet Plans', function() {
    it('Gets, types and visual tests', function() {

//Visits Home and begins to qual
cy.visit(Cypress.env('baseUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
         .wait(7000) 
   
//visit internet 150 2yr PDP
cy.visit('https://www.telus.com/en/shop/home/product/internet-150-30')

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
//cy.compareSnapshot("Int PDP");
cy.matchImageSnapshot("Int PDP");


//go to internet 150 no-term PDP
cy.contains('Switch to no term plan').click()
         .wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 
//snapshots page for comparison
//cy.compareSnapshot("Int_150 NoTerm");
cy.matchImageSnapshot("Int_150 NoTerm");

    
//visit internet 75 2yr PDP
cy.visit('https://www.telus.com/en/shop/home/product/internet-75')

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 


//snapshots page for comparison
//cy.compareSnapshot("Int 75 2yr PDP");
cy.matchImageSnapshot("Int 75 2yr PDP");

//go to internet 75 no-term PDP
cy.contains('Switch to no term plan').click()
         .wait(2000) 
        
 //Opens T & C section
cy.contains('View terms and conditions').click()
        .wait(2000) 
                 

//snapshots page for comparison
//cy.compareSnapshot("Int 75 noTerm PDP");
cy.matchImageSnapshot("Int 75 noTerm PDP");






    })
  })
  