describe('Home Phone', function() {
  it('Gets, types and visual tests', function() {
    cy.visit('/')//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress() 
      .visit('/')//Go to HomePhone plans 
      .get('[data-qa=button-home-phone]').click()
      .wait(2000)
      .visit('/product/home-phone-lite')//visit Home Phone Lite
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear
      .wait(3000)
    cy.window().contains('Calling features').click()//Opens Calling Features section
      .wait(2000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("HomePhoneLite PDP");//snapshots page for comparison
    cy.visit('/product/home-phone')//visit basics + crave PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('Calling features').click()//Opens calling feautures section
      .wait(2000)         
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Homephone PDP");//snapshots page for comparison
  })
})
  