describe('Optik Plans PDP', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit(Cypress.env('baseUrl'))
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
.wait(7000) 
   

//visit Optik Essentials 2yr PDP Plans
cy.visit('https://www.telus.com/en/shop/home/product/essentials-mediaroomtv-hs2-0')


//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

 //Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Optik Essentials 2yr PLP");

//visit Optik 4TP+1 Noterm PDP
cy.visit('https://www.telus.com/en/shop/home/product/4-theme-packs-1-premium-mediaroomtv-hs2-0?variant=f5172855730be3ee2355fa783d37589f')


//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

 
//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Optik 4TP+1P no-term PLP");


    })
  })
  