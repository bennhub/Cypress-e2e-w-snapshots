describe('Bundles_Compass', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillCompassAddress() 
   
//visit Bundles plans page
cy.get('[data-qa=button-bundle]').click()
.wait(2000)


//sets cookie to prevent purlple banner from appearing
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)


//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 
 
//snapshots page for comparison
cy.matchImageSnapshot("bundPLP_nofilter");

// Offers Element grid snap
//cy.get('.style__OfferGrid-sc-1ad47ew-1').matchImageSnapshot('just-grid')

// Enable GWP Filter
cy.get('[data-testid="pilter-tags-Gift With Purchase"]').click()
.wait(2000)

//snapshots page for comparison
cy.matchImageSnapshot("bundPLP_GwpFilter");

// Disable GWP Filter
cy.get('[data-testid="pilter-tags-Gift With Purchase-selected"]').click()
.wait(3000)

// Enable Pik Filters
cy.get('[data-testid="pilter-tags-Pik TV"]').click()
.wait(2000)

//snapshots page for comparison
cy.matchImageSnapshot("bundPLP_PikFilter");

// Disable Pik Filter
cy.get('[data-testid="pilter-tags-Pik TV-selected"]').click()
.wait(3000)

// Enable Optik Filter
cy.get('[data-testid="pilter-tags-Optik TV"]').click()
.wait(2000)

//snapshots page for comparison
cy.matchImageSnapshot("bundPLP_OptikFilter");



    })
  })
  