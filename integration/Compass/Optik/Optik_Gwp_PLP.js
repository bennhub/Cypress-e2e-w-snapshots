describe('Optik GWP', function() {
  it('Gets, types and visual tests', function() {
    cy.visit('/')//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress() 
      .visit('/')  
      .visit('/optik/gifts')
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
      .contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000) 
      .contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
      .matchImageSnapshot("Optik Gwp PLP");//snapshots page for comparison
    cy.visit('/product/500-visa')//visit internet GWP Visa PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
      .contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000)
      .contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
      .matchImageSnapshot("Optik Gwp Visa PDP");//snapshots page for comparison
  })
})
  