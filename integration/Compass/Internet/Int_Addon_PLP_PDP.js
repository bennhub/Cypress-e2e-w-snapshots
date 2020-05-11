describe('Internet Plans', function() {
  it('Gets, types and visual tests', function() {
    cy.visit('/')//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress() 
      .visit('/') 
      .visit('/internet/addons')//visit internet Addons PLP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
      .contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
      .matchImageSnapshot("Int_Addon_PLP");//snapshots page for comparison
    cy.visit('/product/telus-boost-wi-fi-starter-pack')//visit internet Addon Telus Boost PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
      .contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
      .matchImageSnapshot("Int_Addon_TB_PDP");//snapshots page for comparison
  })
})
  