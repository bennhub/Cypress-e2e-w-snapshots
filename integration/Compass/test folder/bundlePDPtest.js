describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {
        
//*******Bundles essentials-int75-home-phone
cy.visit('/product/essentials-int75-home-phone?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("essentials-int75-home-phone PDP");


    })
  })