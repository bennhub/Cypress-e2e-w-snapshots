describe('Internet Plans', function() {
  it('Gets, types and visual tests', function() {
    cy.visitHSCHomepage()//Visit base url then qual compass
      .contains('Get started').click()
      .fillFifaAddress() 
      cy.visitHSCHomepage()//lands back on home page (helps when testing on preview env)
      cy.get('[data-qa=button-internet]').click()//Go to internet plans 
      .wait(2000)
    //cy.get('[data-qa=link-details-internet-150-150-24]').click()//click view details // snap shot
   //   .wait(2000)
    //cy.matchImageSnapshot("Details Int 150")
      //.wait(2000)
    //cy.get('[data-testid=close-button]').click({force: true})
    //cy.matchImageSnapshot("Int pure fibre plans 2yr")//snap full page for 2 year term
    //cy.get('[data-qa=checkbox-internet-150-150-24]').click()//uncheck to see no-term plan
    //cy.get('[data-qa=checkbox-internet-300-300-24]').click()
/*
    cy.get('[data-qa=checkbox-internet-750-750-24]').click()
    cy.get('[data-qa=checkbox-internet-75-75-24]').click()
    cy.get('[data-qa=checkbox-internet-25-25-24]').click()
*/
    cy.window().contains('Cancellation policies',{ timeout: 15000 }).click()//Opens FAQ section
    cy.window().contains('Installation details',{ timeout: 15000 }).click()//Opens T & C section
      .wait(6000) 
    cy.window().contains('View terms and conditions',{ timeout: 15000 }).click()
      .wait(2000) 
    cy.matchImageSnapshot("Int pure fibre plans ")//snap full page exposure for no -term
    })
})
  