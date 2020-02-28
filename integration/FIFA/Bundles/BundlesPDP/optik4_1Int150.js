describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillFifaAddress() 

       
//Bundle PDP FIFA Qual

//******Bundles Optik 7-1 + Int 150 PDP
cy.visit('/product/optik-4plus1-int150?bundle')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy
.contains('View terms and conditions')
.should('be.visible', { timeout: 5000 })
.click()

//snapshots page for comparison
cy.matchImageSnapshot("optik-4plus1-int150?bundle PDP");

})
})