describe('Internet Plans', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress() 
    cy.visitHSCHomepage() 
      .visit('/shop/home/internet/addons')//visit internet Addons PLP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int_Addon_PLP");//snapshots page for comparison
    cy.visit('/shop/home/product/telus-boost-wi-fi-starter-pack')//visit internet Addon Telus Boost PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int_Addon_TB_PDP");//snapshots page for comparison
  })
})
  