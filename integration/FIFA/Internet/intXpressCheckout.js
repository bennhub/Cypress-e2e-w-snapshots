/*describe('Internet xpress checkout FIFA', function() {
    it('Gets, types and visual tests', function() {

//Visits Home and begins to qual
cy.visit('/home-services/internet/plans')

//sets cookie so purple banner does not apppear 
//cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
//.wait(3000)

//Opens FAQ section
cy.window().contains('Cancellation policies', { timeout: 10000 }).click()
         //.wait(2000) 

//Opens T & C section
cy.window().contains('Installation details').click()
         .wait(2000) 

//Upregrade your plan should be visble
cy.get('[data-qa=upgrade-your-plan]').should('be.visible')
.wait(1000)

//snapshots page for comparison
cy.matchImageSnapshot("Xpress Internet page");

//Go to internet plans 
/*cy.get('[data-qa=button-order-now-gigabit-internet-24]').click()
.wait(2000)

//Qual FIFA
.fillFifaAddress()
.wait(3000)

//Url should include express checkout
cy.url().should('include', '/commerce/cart?checkout=express')

//Open T&C
//Opens FAQ section
cy.window().contains('Cancellation policies').click()
         //.wait(2000) 

//Opens T & C section
cy.window().contains('Installation details').click()
         .wait(2000) 

//snapshots page for comparison
//cy.matchImageSnapshot("Int Xpress checkout page") 



    })
  })
  */