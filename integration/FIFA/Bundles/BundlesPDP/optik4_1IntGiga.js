describe('Bundles_FIFA_PDP', function() {
    it('Gets, types and visual tests', function() {
      cy.visitHSCHomepage()//Visit base url then qual compass//Visit base url then qual compass
        //.contains('Get started').click()
        .fillFifaAddress() 
      cy.visitHSCHomepage()//Visit base url then qual compass
      cy.visit('/shop/home/product/optik-4plus1-gigabit?bundle')//Bundles Optik 7-1 + Int 150 PDP
      cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
        .wait(3000)
      cy.window().contains('View terms and conditions').click()//Opens T & C section
        .wait(2000)
      cy.matchImageSnapshot("4_1Giga_bundle PDP");//snapshots page for comparison
    })
})



