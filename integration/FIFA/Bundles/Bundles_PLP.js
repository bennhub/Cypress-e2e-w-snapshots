describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {

cy.visit('/')//Visit base url then qual compass
  .contains('Get started').click()
  .fillFifaAddress() 
cy.visit('/')
cy.get('[data-qa=button-bundle]').click()//visit Bundles plans page
  .wait(2000)
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie to prevent purlple banner from appearing
  .wait(3000)
cy.window().contains('View terms and conditions').click()//Opens T & C section
  .wait(2000) 
cy.matchImageSnapshot("bundPLP_nofilter");//snapshots page for comparison
// Offers Element grid snap
//cy.get('.style__OfferGrid-sc-1ad47ew-1').matchImageSnapshot('just-grid')
cy.get('[data-testid="pilter-tags-Gift With Purchase-selected"]').click()// Disable GWP Filter
  .wait(3000)
cy.get('[data-testid="pilter-tags-Pik TV"]').click()// Enable Pik Filters
  .wait(2000)
cy.matchImageSnapshot("bundPLP_PikFilter");//snapshots page for comparison
cy.get('[data-testid="pilter-tags-Pik TV-selected"]').click()// Disable Pik Filter
  .wait(3000)
cy.get('[data-testid="pilter-tags-Optik TV"]').click()// Enable Optik Filter
  .wait(2000)
cy.matchImageSnapshot("bundPLP_OptikFilter");//snapshots page for comparison
  })
})
  