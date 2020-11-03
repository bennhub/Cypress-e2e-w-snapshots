describe('Internet Plans', function() {
  it('Gets, types and visual assertion', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress() 
    cy.visitHSCHomepage()//bring me back to the original baseurl (for wcpreview punting issue)
      .get('[data-qa=button-internet]').click()
      .wait(2000)
    //cy.window().contains("We're working on getting PureFibre to your area.").should('be.visible')
    //Error messaging ineligible plan visble only visible through pre-pop service
      /*.wait(2000)
      .get('[data-qa=link-details-internet-150-30-24]').click()
      .wait(2000)
      .matchImageSnapshot("Details Int 150")
      .wait(2000)
      .get('[data-testid=close-button]').click({force: true})*/
    //.matchImageSnapshot("Int plans 2yr");//snap full page exposure for 2 year term
    //cy.get('[data-qa=checkbox-internet-150-30-24]').click()  //uncheck to see no-term plan
    cy.window().contains('Cancellation policies',{ timeout: 15000 }).click()//Opens FAQ section
    cy.window().contains('Installation details',{ timeout: 15000 }).click()//Opens T & C section
      .wait(6000) 
    cy.window().contains('View terms and conditions',{ timeout: 15000 }).click()
      .wait(2000) 
    cy.matchImageSnapshot("Int plans page snap");//snap full page exposure for no -term
  })
})
  