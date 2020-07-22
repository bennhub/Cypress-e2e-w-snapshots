describe('Internet Plans', function() {
  it('Gets, types and visual tests', function() {
    cy.visit('/')//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress() 
      .visit('/')//lands back on home page
      .get('[data-qa=button-optik]').click()//Go to optik plans 
      .wait(2000)
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Optik PLP");//snapshots page for comparison
  })
})
  