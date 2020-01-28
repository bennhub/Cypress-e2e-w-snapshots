describe('Pik', function() {
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
//Go to Pik plans 
cy.get('[data-qa=button-pik]').click()
.wait(2000)

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)
 
//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
.wait(2000)
        

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Pik PLP");


//visit basics + pik 5 PDP
cy.visit('/product/the-basics-pik-5-tvx')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)


//Opens Details section
cy.contains('Details').click()
.wait(2000)

//Opens channels section
cy.contains('The basic channels').click()
.wait(2000)         

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Basics+5 PDP");

//visit basics + crave PDP
cy.visit('/product/the-basics-crave-tvx')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)


//Opens Details section
cy.contains('Details').click()
.wait(2000)

//Opens channels section
cy.contains('The basic channels').click()
.wait(3000)         

//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
.wait(2000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Basics+Crave PDP");


    })
  })
  