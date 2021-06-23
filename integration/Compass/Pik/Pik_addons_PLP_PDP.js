describe('Pik Addons', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      //.contains('Get started').click()
      .fillCompassAddress() 
    cy.visitHSCHomepage() 
      .visit('/shop/home/pik/addons')//visit internet 150 2yr PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000) 
    cy.window().contains('View terms and conditions').click()//Opens T &C section
      .wait(2000) 
    cy.matchImageSnapshot("Pik Addons PLP");//snapshots page for comparison
    cy.visit('/shop/home/product/apple-tv')//visit Pik Addon Apple TV 32gb
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear
      .wait(3000)
    cy.window().contains('Details').click()//Opens Details section
      .wait(2000)
    cy.window().contains("What’s in the box").click()//Opens Whats in the box
      .wait(2000) 
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000)
    cy.window().contains('View terms and conditions').click()
      .wait(2000) 
    cy.matchImageSnapshot("Pik Addons Apple TV");//snapshots page for comparison
  })
})
  