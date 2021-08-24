describe('Test Homephone PLP', function() {
  before(() => {
    // purple survey banner
    cy.setCookie(Cypress.env('SURVEY_COOKIE_NAME'), 'false');
    // get a session token and qual with a FIFA address
    cy.visitHSCHomepage()//Visit base url then qual compass
      .fillCompassAddress()
  })
describe('Home Phone', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Go to HomePhone plans 
      .visit('/shop/home/home-phone/plans')//visit Home Phone PLP  
    cy.window().contains('View terms and conditions',{ timeout: 60000 }).click({force: true})//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Homephone PLP")//snapshots page for comparisons
  })
})
})