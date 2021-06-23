describe('Internet Plans', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      //.contains('Get started').click()
      .fillCompassAddress() 
    cy.visitHSCHomepage()//bring me back to the original baseurl (for wcpreview punting issue)
      .visit('/shop/home/product/internet-150-30')//go to internet PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int PDP");//snapshots page for comparison
    cy.contains('Switch to no term plan').click()//go to internet 150 no-term PDP
      .wait(2000) 
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int_150 NoTerm");//snapshots page for comparison
  })
})
  