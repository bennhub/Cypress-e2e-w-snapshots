describe('Optik Plans PDP', function() {
  it('Gets, types and visual tests', function() {
    cy.visit('/')//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress() 
      .visit('/')
      .visit('/product/essentials-mediaroomtv-hs2-0')//visit Optik Essentials 2yr PDP Plans
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click() //Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Optik Essentials 2yr PLP");//snapshots page for comparison
    cy.visit('/product/4-theme-packs-1-premium-mediaroomtv-hs2-0?variant=f5172855730be3ee2355fa783d37589f')//visit Optik 4TP+1 Noterm PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000)
    cy.matchImageSnapshot("Optik 4TP+1P no-term PLP");//snapshots page for comparison
  })
})
  