/*
describe(' Bundle Builder to Interstial', function() {
    it('Verify Bundle Builder to Interstial Flow', function() {
      cy.visitHSCHomepage()//Visit base url then qual compass
        //.contains('Get started').click()
        .fillFifaAddress() 
      cy.visit('/shop/home-services/bundle/build-your-own')//visit internet Addons PLP
      cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
        .wait(3000)
      cy.matchImageSnapshot("BB_fullpage_snap")//snapshots page for comparison
      cy.get('[data-qa=add-to-cart]').click()//
      cy.url().should('include', '/shop/home-services/customize', { timeout: 60000 })
      cy.get('[data-qa=purefibre-gigabit-internet---2-year-term]', { timeout: 60000 })
        .wait(3000)
      cy.matchImageSnapshot("Interstital_fullpage_snap")//snapshots page for comparison
      })
    })
    */
    