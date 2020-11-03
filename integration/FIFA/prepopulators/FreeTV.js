describe('Test Top 5 Prepopulators', function() {
    before(() => {
      // purple survey banner
      cy.setCookie(Cypress.env('SURVEY_COOKIE_NAME'), 'false');
      // get a session token and qual with a FIFA address
      cy.visitHSCHomepage()//Visit base url then qual compass
        .contains('Get started').click()
        .fillFifaAddress()
    })
   describe('Smoke test FIFA flow HSC e2e', function() {
     it('Verify Free TV Prepop', function () {
      cy.visit('/shop/home-services/loading?p[internet-75-75|internet-75|internet-50]&p[4-theme-packs-1-premium-mediaroomtv-hs2-0]&c[optikTVCount]=2&p[free-samsung-55-tv]&r=/en/commerce/cart',{ timeout: 60000 })
        .get('[data-test-id="cart-item-internet"]',{ timeout: 60000 }).should('be.visible')//verify items on cart page
        .get('[data-test-id="cart-item-optikTV"]',{ timeout: 60000 }).should('be.visible')
        .get('[data-test-id="cart-item-gift"]',{ timeout: 60000 }).should('be.visible')
      })
    })
})
  