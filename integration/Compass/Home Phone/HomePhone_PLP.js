describe('Home Phone', function() {
  it('Gets, types and visual tests', function() {
    cy.visit('/')//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress()
    cy.visit('/')//Go to HomePhone plans 
    cy.get('[data-qa=button-home-phone]').click()
      .wait(2000)
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)        
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Homephone PLP")//snapshots page for comparisons
  })
})