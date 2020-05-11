/*describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillFifaAddress() 


//Bundle PDP Compass Qual
cy.visit('/')
//******Bundles Optik 7-1 + Int 150 PDP
cy.visit('/product/gigabit-internet-boost?bundle&variant=9153165459513785439|term,9150280421713159508')

cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy
.contains('View terms and conditions')
.should('be.visible', { timeout: 7000 })
.click()

//snapshots page for comparison
cy.matchImageSnapshot("Gigabit Internet + Boost");

})
})
*/