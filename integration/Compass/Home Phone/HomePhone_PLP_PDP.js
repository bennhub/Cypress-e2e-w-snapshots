describe('Home Phone', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit(Cypress.env('baseUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
.type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
.wait(7000) 
   
//lands back on home page
//Go to HomePhone plans 
cy.get('[data-qa=button-home-phone]').click()
.wait(2000)

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)        
 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparisons
//cy.compareSnapshot("Homephone PLP");
cy.matchImageSnapshot("Homephone PLP");


//visit Home Phone Lite
cy.visit('https://www.telus.com/en/shop/home/product/home-phone-lite')


//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)


//Opens Calling Features section
cy.contains('Calling features').click()
         .wait(2000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
//cy.compareSnapshot("HomephoneLite PDP");
cy.matchImageSnapshot("HomePhoneLite PDP");


//visit basics + crave PDP
cy.visit('https://www.telus.com/en/shop/home/product/home-phone')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)


//Opens calling feautures section
cy.contains('Calling features').click()
         .wait(2000)         

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 


//snapshots page for comparison
//cy.compareSnapshot("Homephone PDP");
cy.matchImageSnapshot("Homephone PDP");


    })
  })
  