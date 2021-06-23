describe('Bundles_Compass', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()
  //cy.visit(Cypress.env('ELIGIBILITY_URL'));
  //cy.visit ('https://digital:notwebchannel@www.wcstage.telus.com/shop/eligibility')
    cy.fillCompassAddress() //Qual Compass via API endpoint
    cy.visitHSCHomepage()//Back to base url (needed for running tests on wcpreview)
      .get('[data-qa=button-bundle]').click()//visit Bundles plans page
      .wait(2000)
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie to prevent purlple banner from appearing
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(3000) 
    cy.matchImageSnapshot("bundPLP_nofilter");//snapshots page for comparison
    /*cy.get('[data-testid="pilter-tags-Gift With Purchase"]').click()// Enable GWP Filter
      .wait(3000)
      .matchImageSnapshot("bundPLP_GwpFilter");//snapshots page for comparison
    cy.get('[data-testid="pilter-tags-Gift With Purchase-selected"]').click()// Disable GWP Filter
      .wait(3000)
      .get('[data-testid="pilter-tags-Pik TV"]').click()// Enable Pik Filters
      .wait(2000)
      .matchImageSnapshot("bundPLP_PikFilter");//snapshots page for comparison
    cy.get('[data-testid="pilter-tags-Pik TV-selected"]').click()// Disable Pik Filter
      .wait(3000)
      .get('[data-testid="pilter-tags-Optik TV"]').click()// Enable Optik Filter
      .wait(3000)
      .matchImageSnapshot("bundPLP_OptikFilter");//snapshots page for comparison*/
  })
})
  