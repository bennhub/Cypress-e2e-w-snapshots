describe('Internet Plans', function() {
  it('Gets, types and visual assertion', function() {
    cy.visit('/')//Visit base url then qual compass
      .contains('Get started').click()
      .fillCompassAddress() 
      .visit('/')//bring me back to the original baseurl (for wcpreview punting issue)
      .get('[data-qa=button-internet]').click()
      .wait(2000)
      .contains("We're working on getting PureFibre to your area.").should('be.visible')//Error messaging ineligible plan visble
      .wait(2000)
      .get('[data-qa=link-details-internet-25-24]').click()//click view details drop for 2 year term
      .wait(2000)
      .matchImageSnapshot("Details Int 25")
      .wait(2000)
      .get('[data-testid=close-button]').click({force: true})
      .get('[data-qa=link-details-internet-75-24]').click()
      .wait(2000)
      .matchImageSnapshot("Details Int 75")
      .wait(2000)
      .get('[data-testid=close-button]').click({force: true})
      .get('[data-qa=link-details-internet-150-30-24]').click()
      .wait(2000)
      .matchImageSnapshot("Details Int 150")
      .wait(2000)
      .get('[data-testid=close-button]').click({force: true})
      .get('[data-qa=link-details-internet-15-24]').click()
      .wait(2000)
      .matchImageSnapshot("Details Int 15")
      .wait(2000)
      .get('[data-testid=close-button]').click({force: true})
      .matchImageSnapshot("Int plans 2yr");//snap full page exposure for 2 year term
    cy.get('[data-qa=checkbox-internet-25-24]').click()//uncheck to see no-term plan
      .get('[data-qa=checkbox-internet-75-24]').click()
      .get('[data-qa=checkbox-internet-150-30-24]').click()
      .get('[data-qa=checkbox-internet-15-24]').click()
      .contains('Cancellation policies').click()//Opens FAQ section
      .contains('Installation details').click()//Opens T & C section
      .wait(2000) 
      .matchImageSnapshot("Int plans no term");//snap full page exposure for no -term
  })
})
  