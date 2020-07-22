describe('Internet Addons FIFA', function() {
    it('Gets, types and visual tests', function() {

//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillFifaAddress() 
  cy.visit('/')  
//visit internet Addons PLP
cy.visit('/internet/addons')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens FAQ section
//cy.contains('Frequently Asked Questions').click()
         //.wait(2000) 

//Opens T & C section
cy.window().contains('View terms and conditions').click()
         .wait(2000) 
//snapshots page for comparison
//cy.compareSnapshot("Int_Addon_PLP");
cy.matchImageSnapshot("Int_Addon_PLP");

//visit internet Addon Telus Boost PDP
cy.visit('/product/telus-boost-wi-fi-starter-pack-easy-payment')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Opens T & C section
cy.window().contains('View terms and conditions').click()
         .wait(2000) 

//snapshots page for comparison
//cy.compareSnapshot("Int_Addon_TB_PDP");
cy.matchImageSnapshot("Int_Addon_TBW_EsyPmt_PDP");




    })
  })
  