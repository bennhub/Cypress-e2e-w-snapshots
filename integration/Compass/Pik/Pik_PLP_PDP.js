describe('Pik', function() {
  it('Gets, types and visual tests', function() {
    cy.visit('/')//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress() 
      .visit('/')//lands back on home page
      .get('[data-qa=button-pik]').click()//Go to Pik plans 
      .wait(2000)
      .seCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
      .contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000)
      .contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
      .matchImageSnapshot("Pik PLP");//snapshots page for comparison
    cy.visit('/product/the-basics-pik-5-tvx')//visit basics + pik 5 PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
      .contains('Details').click()//Opens Details section
      .wait(2000)
      .contains('The basic channels').click()//Opens channels section
      .wait(2000)         
      .contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(3000)
      .contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
      .matchImageSnapshot("Basics+5 PDP");//snapshots page for comparison
    cy.visit('/product/the-basics-crave-tvx')//visit basics + crave PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear
      .wait(3000)
      .contains('Details').click()//Opens Details section
      .wait(2000)
      .contains('The basic channels').click()//Opens channels section
      .wait(3000)         
      .contains('Frequently Asked Questions').click()//Opens FAQ section
      .wait(2000)
      .contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
      .matchImageSnapshot("Basics+Crave PDP");//snapshots page for comparison
  })
})
  