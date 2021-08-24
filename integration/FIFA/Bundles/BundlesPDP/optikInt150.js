describe('Test Bundle PDP', function() {
  before(() => {
    // purple survey banner
    cy.setCookie(Cypress.env('SURVEY_COOKIE_NAME'), 'false');
    // get a session token and qual with a FIFA address
    cy.visitHSCHomepage()//Visit base url then qual compass
      .fillCompassAddress()
  })
describe('Test Bundles PDP (FIFA)', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Back to base url (needed for running tests on wcpreview)
      .visit('/shop/home/product/optik-4plus1-int150?bundle') //Go to Bundles Optik 7-1 + Int 150 PDP
      .wait(3000)
      .get('.StyledClickable-lxf9hd-0')//Opens T & C section
      .should('be.visible', { timeout: 5000 }).click()
    cy.matchImageSnapshot("optik4plus1-int150?bundle PDP");//snapshot Bundle page 
    cy.get('[data-qa=button-addToCart-optik-4plus1-int150').click()//Panel [Add to Cart]
      .wait(2000)
      .get('[data-qa=skip-channel').click()
      .wait(2000)
      .visit('/commerce/cart') //Go to Cart
      cy.get('[data-test-id="cart-item-internet"]',{ timeout: 60000 }).should('be.visible')//verify items on cart page)
      cy.get('[data-test-id="cart-item-optikTV"]',{ timeout: 60000 }).should('be.visible')//verify items on cart page)
    })
  })
})