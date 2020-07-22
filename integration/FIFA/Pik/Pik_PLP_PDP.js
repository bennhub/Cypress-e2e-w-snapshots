describe('Pik PLP PDP FIFA', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillFifaAddress() 
   
//lands back on home page
cy.visit('/')
//Go to Pik plans 
cy.get('[data-qa=button-pik]').click()
.wait(2000)

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)
 
//Opens FAQ section
cy.window().contains('Frequently Asked Questions').click()
.wait(4000)
        

//Opens T & C section
/*cy
.contains('View terms and conditions')
.should('be.visible', { wait: 3000 })
.click()*/

//snapshots page for comparison
cy.matchImageSnapshot("Pik PLP");


//visit basics + pik 5 PDP
cy.visit('/product/the-basics-pik-5-tvx')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)


//Opens Details section
cy.window().contains('Details').click()
.wait(2000)

//Opens channels section
cy.window().contains('The basic channels').click()
.wait(2000)         

//Opens FAQ section
cy.window().contains('Frequently Asked Questions').click()
.wait(2000)

//Opens T & C section
cy.window().contains('View terms and conditions')
.should('be.visible', { timeout: 5000 })
.click() 

//snapshots page for comparison
//cy.compareSnapshot("Basics+5 PDP");
cy.matchImageSnapshot("Basics+5 PDP");


//visit basics + crave PDP
cy.visit('/product/the-basics-crave-tvx')

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)


//Opens Details section
cy.window().contains('Details').click()
.wait(2000)

//Opens channels section
cy.window().contains('The basic channels').click()
.wait(2000)         

//Opens FAQ section
cy.window().contains('Frequently Asked Questions').click()
.wait(2000)

//Opens T & C section
cy.window().contains('View terms and conditions')
.should('be.visible', { timeout: 5000 })
.click() 

//snapshots page for comparison
cy.matchImageSnapshot("Basics+Crave PDP");


    })
  })
  