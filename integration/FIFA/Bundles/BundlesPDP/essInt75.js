/*describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {
cy.visit('/')//Visit base url then qual compass
  .contains('Get started').click()
  .fillFifaAddress() 
cy.visit('/')
cy.visit('/product/essentials-int75?bundle')//Bundles Optik 7-1 + Int 150 PDP
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
  .wait(3000)
cy.contains('View terms and conditions')//Opens T & C section
  .should('be.visible', { timeout: 5000 })
  .click()
cy.matchImageSnapshot("essentials-int75?bundle PDP");//snapshots page for comparison
   })
})
*/

