describe('Test Bundle PLP', function() {
  before(() => {
    // purple survey banner
    cy.setCookie(Cypress.env('SURVEY_COOKIE_NAME'), 'false');
    // get a session token and qual with a FIFA address
    cy.visitHSCHomepage()//Visit base url then qual compass
      //.contains('Get started').click()
      .fillFifaAddress()
  })
describe('Bundles_FiFA', function() {
  it('Gets, types and visual tests', function() {
    cy.get('[data-qa=button-bundle]',{ timeout: 60000 }).click({force: true})//visit Bundles plans page
      .wait(3000)
    cy.window().contains('View terms and conditions',{ timeout: 60000 }).click({force: true})//Opens T & C section
      .wait(3000) 
    cy.matchImageSnapshot("bundPLP_nofilter");//snapshots page for comparison
    })
  })
})
  