describe('Internet PDP FIFA', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      //.contains('Get started').click()
      .fillFifaAddress() 
    cy.visitHSCHomepage()
    cy.visit('/shop/home/product/internet-750-750')//visit internet 750 2yr PDP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int PDP")//snapshots page for comparison
    cy.window().contains('Switch to no term plan').click()//go to internet 150 no-term PDP
      .wait(2000)
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int_750 NoTerm")//snapshots page for comparison
    cy.visit('/shop/home/product/internet-25-25')//visit internet 75 2yr PDP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click() //Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int 25 2yr PDP")//snapshots page for comparison
    cy.window().contains('Switch to no term plan').click()//go to internet 75 no-term PDP
      .wait(2000)
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click() //Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int 25 noTerm PDP")//snapshots page for comparison
    })
})
  