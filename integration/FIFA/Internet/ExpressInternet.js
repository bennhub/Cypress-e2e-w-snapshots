describe('Test Express Internet page', function() {
    before(() => {
      // purple survey banner
      cy.setCookie(Cypress.env('SURVEY_COOKIE_NAME'), 'false');
      // get a session token and qual with a FIFA address
      cy.visitExpressHomepage()//Visit base url then qual compass
        //.contains('Get started').click()
       // .fillFifaAddress()
    })
   describe('Smoke test FIFA flow HSC e2e', function() {
     it('Verify express internet offers', function () {
         /*
      cy.visit('/shop/home-services/loading?o[internet-75-75|internet-75|internet-50]&p[4-theme-packs-1-premium-mediaroomtv-hs2-0]&c[optikTVCount]=2&p[free-samsung-55-tv]&r=/shop/home-services/customize',{ timeout: 60000 })
      cy.url().should('include', '/shop/home-services/customize')
      cy.get('[data-qa="4-theme-packs---1-premium---2-year-term"]',{ timeout: 60000 }).should('be.visible')//verify items on cart page
        .wait(5000)
      cy.get('button').contains('No, thanks',{ timeout: 60000 }).click({force: true})
      */
      cy.wait(3000)
      cy.matchImageSnapshot("expressInternet pre-qual")//snapshots page for comparison
      cy.get('[data-qa=button-select-this-plan-1-5-gigabit-internet-24]',{ timeout: 25000 }).click()//Go to internet plans 
        .wait(2000)
        .fillFifaExpressAddress()
      //cy.visit('/shop/home-services/customize',{ timeout: 60000 })
      cy.url().should('include', '/shop/home-services/customize')
      cy.get('[data-qa="purefibre-1-5-gigabit-internet---2-year-term"]',{ timeout: 60000 }).should('be.visible')//verify items on cart page
      //.wait(5000)
      //cy.get('button').contains('No, thanks',{ timeout: 60000 }).click({force: true})
      //cy.matchImageSnapshot("expressInternet1.5")//snapshots page for comparison
      })
    })
})
