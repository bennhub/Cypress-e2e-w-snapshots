describe('Internet Plans', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
.contains('Get started').click()
.fillFifaAddress() 
   
//lands back on home page
//Go to internet plans 
cy.get('[data-qa=button-internet]').click()
.wait(2000)

//Error messaging ineligible plan visble
cy.contains("We're working on getting PureFibre to your area.").should('be.visible')
.wait(2000)

//Error messaging ineligible plan visble close
cy.get('.StyledInteractiveIconButton-sc-1phwvk2-0').click()

//click view details // snap shot
cy.get('[data-qa=link-details-internet-150-150-24]').click()
.wait(2000)
cy.matchImageSnapshot("Details Int 150")
.wait(2000)
cy.get('[data-testid=close-button]').click({force: true})

cy.get('[data-qa=link-details-internet-300-300-24]').click()
.wait(2000)
cy.matchImageSnapshot("Details Int 300")
.wait(2000)
cy.get('[data-testid=close-button]').click({force: true})

cy.get('[data-qa=link-details-gigabit-internet-24]').click()
.wait(2000)
cy.matchImageSnapshot("Details Int giga")
.wait(2000)
cy.get('[data-testid=close-button]').click({force: true})

cy.get('[data-qa=link-details-internet-750-750-24]').click()
.wait(2000)
cy.matchImageSnapshot("Details Int 750")
.wait(2000)
cy.get('[data-testid=close-button]').click({force: true})

cy.get('[data-qa=link-details-internet-75-75-24]').click()
.wait(2000)
cy.matchImageSnapshot("Details Int 750")
.wait(2000)
cy.get('[data-testid=close-button]').click({force: true})

cy.get('[data-qa=link-details-internet-25-25-24]').click()
.wait(2000)
cy.matchImageSnapshot("Details Int 750")
.wait(2000)
cy.get('[data-testid=close-button]').click({force: true})


//snap full page for 2 year term
cy.matchImageSnapshot("Int pure fibre plans 2yr");

//uncheck to see no-term plan
cy.get('[data-qa=checkbox-internet-150-150-24]').click()
cy.get('[data-qa=checkbox-internet-300-300-24]').click()
cy.get('[data-qa=checkbox-gigabit-internet-24]').click()
cy.get('[data-qa=checkbox-internet-750-750-24]').click()
cy.get('[data-qa=checkbox-internet-75-75-24]').click()
cy.get('[data-qa=checkbox-internet-25-25-24]').click()


//Opens FAQ section
cy.contains('Frequently Asked Questions').click()
         //.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
         .wait(2000) 


//snap full page exposure for no -term
cy.matchImageSnapshot("Int pure fibre plans no term");



    })
  })
  