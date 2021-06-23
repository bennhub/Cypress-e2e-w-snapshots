describe('Internet Plans', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      //.contains('Get started').click()
      .fillCompassAddress() 
    cy.visitHSCHomepage()
      .visit('/shop/home/internet/gifts')//visit internet 150 2yr PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T &C section
      .wait(2000) 
    cy.matchImageSnapshot("Int Gwp PLP");//snapshots page for comparison
    cy.visit('/shop/home/product/200-visa')//visit internet GWP Visa PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int Gwp Visa PDP");//snapshots page for comparison
  })
})
  