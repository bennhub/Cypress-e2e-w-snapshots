describe('Pik PLP PDP FIFA', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      .contains('Get started').click()
      .fillFifaAddress() 
    cy.visitHSCHomepage()//lands back on home page
    cy.get('[data-qa=button-pik]').click()//Go to Pik plans 
      .wait(2000)
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(4000)
/*cy.contains('View terms and conditions')//Opens T & C section
    .should('be.visible', { wait: 3000 })
    .click()*/
    cy.matchImageSnapshot("Pik PLP")//snapshots page for comparison
    cy.visit('/shop/home/product/the-basics-pik-5-tvx')//visit basics + pik 5 PDP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('Details').click()//Opens Details section
      .wait(2000)
    cy.window().contains('The basic channels').click()//Opens channels section
      .wait(2000)         
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000)
    cy.window().contains('View terms and conditions')//Opens T & C section
      .should('be.visible', { timeout: 5000 })
      .click() 
    cy.matchImageSnapshot("Basics+5 PDP")//snapshots page for comparison
    cy.visit('/shop/home/product/the-basics-crave-tvx')//visit basics + crave PDP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('Details').click()//Opens Details section
      .wait(2000)
    cy.window().contains('The basic channels').click()//Opens channels section
      .wait(2000)         
    cy.window().contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000)
    cy.window().contains('View terms and conditions')//Opens T & C section
      .should('be.visible', { timeout: 5000 })
      .click() 
    cy.matchImageSnapshot("Basics+Crave PDP")//snapshots page for comparison
  })
})
  