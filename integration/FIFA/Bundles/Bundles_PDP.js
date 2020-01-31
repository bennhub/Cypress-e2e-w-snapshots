describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {


//Visits Home and begins to qual
cy.visit('/')
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_FIFA'))
  
cy.contains('Check availability').click()
         .wait(7000) 

//visit Bundles plans page
cy.get('[data-qa=button-bundle]').click()
.wait(2000)        
   
//Bundle PDP Compass Qual

//******Bundles Optik 7-1 + Int 150 PDP
cy.visit('/product/optik-7plus1-int150?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         //.wait(2000) 

//snapshots page for comparison
 cy.matchImageSnapshot("bundle 7+1+Int150 PDP");


//*******Bundles Optik 4-1 + Int 150 PDP
cy.visit('/product/optik-4plus1-int150?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
         //.wait(2000) 

//snapshots page for comparison
 cy.matchImageSnapshot("optik-4plus1-int150 PDP");


 //*******Bundles Pik-tv-and-internet-75
cy.visit('/product/pik-tv-and-internet-75?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
 cy.matchImageSnapshot("pik-tv-and-internet-75 PDP");


//*******Bundles essentials-int75
cy.visit('/product/essentials-int75?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("essentials-int75 PDP");

//*******Bundles optik-4plus1-internet-75
cy.visit('/product/optik-4plus1-internet-75?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("optik-4plus1-internet-75 PDP");


//*******Bundles optik-4plus1-int75-freetv
cy.visit('/product/optik-4plus1-internet-75-freetv?bundle')
           

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("optik-4plus1-int75-freetv PDP");


//*******Bundles pik-tv-and-internet-150
cy.visit('/product/pik-tv-and-internet-150?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("pik-tv-and-internet-150 PDP");


//*******Bundles optik-7plus1-int300?bundle
cy.visit('/product/optik-7plus1-int300?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("optik-7plus1-int300?bundle PDP");


    })
  })
  