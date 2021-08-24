describe('Test Homephone PDP', function() {
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
      .visit('/shop/home/product/home-phone-lite')//visit Home Phone Lite
    cy.window().contains('Calling features',{ timeout: 60000 }).click({force: true})//Opens Calling Features section
      .wait(2000)
    cy.window().contains('View terms and conditions',{ timeout: 60000 }).click({force: true})//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("HomePhoneLite PDP");//snapshots page for comparison
    cy.visit('/shop/home/product/home-phone')//visit basics + crave PDP
    cy.window().contains('Calling features',{ timeout: 60000 }).click({force: true})//Opens calling feautures section
      .wait(2000)         
    cy.window().contains('View terms and conditions',{ timeout: 60000 }).click({force: true})//Opens T & C section
      .wait(2000) 
    cy.matchImageSnapshot("Homephone PDP");//snapshots page for comparison
  })
})
})
  