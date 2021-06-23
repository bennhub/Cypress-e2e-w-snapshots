describe('Pik Channels', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      //.contains('Get started').click()
      .fillCompassAddress() 
    cy.visitHSCHomepage()//lands back on home page
      .get('[data-qa=button-pik]').click()//Go to Pik plans 
      .wait(2000)
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
      .visit('/shop/home/pik/channels')//visit pik channels
      .wait(3000) 
    cy.window().contains('Language').click()//Click on Language filter
      .wait(2000) 
      .get(':nth-child(1) > .style__Overlay-sc-1cjw4jg-2').matchImageSnapshot('Language filter')// optik Language filter snap
    cy.window().contains('Category').click()//Click on category filters
      .wait(2000) 
      .get(':nth-child(2) > .style__Overlay-sc-1cjw4jg-2').matchImageSnapshot('Category filter')// optik category filter snap
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ
      .wait(2000) 
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Pik Channels");//snapshots page for comparison
  })
})
  