describe('Bundles_Compass', function() {
  it('Gets, types and visual tests', function() {
    cy.visit('/')//Visit base url 
      .contains('Get started').click()
      .fillCompassAddress()//Qual Compass 
      .visit('/')//Back to base url (needed for running tests on wcpreview)
      .visit('/product/essentials-int75?bundle') //Go to Bundles Optik 7-1 + Int 150 PDP
      .setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//set cookie to prevent purple banner pop up
      .wait(3000)
      .get('.StyledClickable-lxf9hd-0')//Opens T & C section
      .should('be.visible', { timeout: 5000 }).click()
      .matchImageSnapshot("essentials-int75?bundle PDP");//snapshot Bundle page 
    cy.get('[data-qa=button-addToCart-essentials-int75').click()//Panel [Add to Cart]
      .wait(2000)
      .get('[data-qa=skip-channel').click()
      .wait(2000)
  })
})