describe('Bundles_Compass', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
    cy.window().contains('Get started').click()
      .fillFifaAddress() 
    cy.visitHSCHomepage()//Bundle PDP FIFA Qual
    cy.visit('/shop/home/product/optik-4plus1-int150?bundle')//Bundles Optik 7-1 + Int 150 PDP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
      .wait(3000)
    cy.contains('View terms and conditions')//Opens T & C section
      .should('be.visible', { timeout: 5000 }).click()
    cy.matchImageSnapshot("optik-4plus1-int150?bundle PDP")//snapshots page for comparison
    })
})
