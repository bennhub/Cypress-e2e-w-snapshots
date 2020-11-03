describe('Pik Addons FIFA', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()
      .contains('Get started').click()
      .fillFifaAddress()
    cy.visitHSCHomepage()
    cy.visit('/shop/home/pik/addons')//visit internet 150 2yr PDP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000) 
    cy.window().contains('View terms and conditions').click()//Opens T &C section
      .wait(2000) 
    cy.matchImageSnapshot("Pik Addons PLP");//snapshots page for comparison
    cy.visit('/shop/product/apple-tv-4k-32gb')//visit Pik Addon Apple TV 32gb
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('Details').click()//Opens Details section
      .wait(2000)
    cy.window().contains("What’s in the box").click()//Opens Whats in the box
      .wait(2000) 
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Pik Addons Apple TV 1Time")//snapshots page for comparison
  })
})
  