/*describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {
      
cy.visit('/')///Visit base url then qual compass
  .contains('Get started').click()
  .fillCompassAddress()//Qual Compass Address
  .visit('/')//Back to base url (needed for running tests on wcpreview)
  .visit('/product/internet-25-boost?bundle')//Bundles Optik 7-1 + Int 150 PDP
  .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
  .wait(3000)
  .contains('View terms and conditions').should('be.visible', { timeout: 5000 }).click()//opens T&C section
cy.matchImageSnapshot("Internet 25 + Boost PDP");//snapshots page for comparison
  })
})
*/