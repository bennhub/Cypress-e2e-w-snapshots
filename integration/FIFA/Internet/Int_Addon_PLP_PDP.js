describe('Internet Addons FIFA', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      //.contains('Get started').click()
      .fillFifaAddress() 
    cy.visitHSCHomepage()  
    cy.visit('/shop/home/internet/addons')//visit internet Addons PLP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
//cy.contains('Frequently Asked Questions').click()//Opens FAQ section
  //.wait(2000) 
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int_Addon_PLP")//snapshots page for comparison
    cy.visit('/shop/home/product/telus-boost-wi-fi-starter-pack-easy-payment')//visit internet Addon Telus Boost PDP
    cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
      .wait(3000)
    cy.window().contains('View terms and conditions').click()//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Int_Addon_TBW_EsyPmt_PDP")//snapshots page for comparison




    })
  })
  