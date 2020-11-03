describe('Optik GWP FIFA', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      .contains('Get started').click()
      .fillFifaAddress() 
    cy.visitHSCHomepage()
    cy.visit('/shop/home/optik/gifts')//visit internet 150 2yr PDP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000) 
    cy.window().contains('View terms and conditions').click()//Opens T &C section
      .wait(2000) 
    cy.matchImageSnapshot("Optik Gwp PLP")//snapshots page for comparison
    cy.visit('/shop/home/product/500-visa')//visit internet GWP Visa PDP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Optik Gwp Visa PDP")//snapshots page for comparison
    })
})
  