describe('Test Interstitial page', function() {
    before(() => {
      // purple survey banner
      cy.setCookie(Cypress.env('SURVEY_COOKIE_NAME'), 'false');
      // get a session token and qual with a FIFA address
      cy.visitHSCHomepage()//Visit base url then qual compass
        //.contains('Get started').click()
        .fillFifaAddress()
    })
   describe('Smoke test FIFA flow HSC e2e', function() {
     it('Verify Optik + Internet + Gwp on Interstital page', function () {
      cy.visit('/shop/home-services/loading?p[internet-75-75|internet-75|internet-50]&p[4-theme-packs-1-premium-mediaroomtv-hs2-0]&c[optikTVCount]=2&p[free-samsung-55-tv]&r=/shop/home-services/customize',{ timeout: 60000 })
      cy.url().should('include', '/shop/home-services/customize')
      //cy.get('[data-qa="Add_Apple_TV_Pik_cart-cta-close"]',{ timeout: 15000 }).click({force: true})
      cy.get('[data-qa="4-theme-packs---1-premium---2-year-term"]',{ timeout: 60000 }).should('be.visible')//verify items on cart page
        .wait(5000)
        //.get('[data-test-id="cart-item-optikTV"]',{ timeout: 60000 }).should('be.visible')
        //.get('[data-test-id="cart-item-gift"]',{ timeout: 60000 }).should('be.visible')
      cy.matchImageSnapshot("optikInt75FreeTV")//snapshots page for comparison
      })
    })
})
