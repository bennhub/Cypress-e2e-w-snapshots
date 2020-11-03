/*describe('Internet xpress checkout FIFA', function() {
    it('Gets, types and visual tests', function() {

cy.visit('/home-services/internet/plans')//Visits Home and begins to qual


//cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )//sets cookie so purple banner does not apppear 
//.wait(3000)


cy.window().contains('Cancellation policies', { timeout: 10000 }).click()//Opens FAQ section
         //.wait(2000) 


cy.window().contains('Installation details').click()//Opens T & C section
         .wait(2000) 


cy.get('[data-qa=upgrade-your-plan]').should('be.visible')//Upregrade your plan should be visble
.wait(1000)


cy.matchImageSnapshot("Xpress Internet page")//snapshots page for comparison

 
/*cy.get('[data-qa=button-order-now-gigabit-internet-24]').click()//Go to internet plans
.wait(2000)


.fillFifaAddress()//Qual FIFA
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