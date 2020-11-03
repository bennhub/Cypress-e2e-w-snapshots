describe('Optik PLP FIFA', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      .contains('Get started').click()
      .fillFifaAddress() 
    cy.visitHSCHomepage()//lands back on home page
    cy.get('[data-qa=button-optik]').click()//Go to internet plans 
      .wait(2000)
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click() //Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Optik PLP")//snapshots page for comparison
  })
})
  