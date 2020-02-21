describe('Home', function() {
    it('Gets, types and visual tests', function() {

      //Visits Home and begins to qual
cy.visit('/')
cy.contains('Get started').click()

//Quals Compass address
cy.get('#autocomplete-form-address-google')
        .type(Cypress.env('address_150'))
  
cy.contains('Check availability').click()
         .wait(7000) 

//visit Bundles plans page
cy.get('[data-qa=button-bundle]').click()
.wait(2000)        
  
cy.get('.style__OfferGridItem-sc-1ad47ew-0:nth-child(1) .TDS_BaseButton-modules__sizing___2kf7G').click()

  //Compass qual from Home 
    
  //cy.visit(Cypress.env('/'))
 
  //cy.visit('/')

  //snapshots page for comparison
  //cy.compareSnapshot('baseURL', 0.0);
  //cy.compareSnapshot('baseURL', 0.1);
  
  //Clicks on get started
  //cy.contains('Get started').click()

  //Quals Compass address

  //cy.get('#autocomplete-form-address-google')
        //.type(Cypress.env('address_150'))
  
  //cy.contains('Check availability').click()
        // .wait(7000) 
   
  //lands back on home page
  //Go to internet plans 

//cy.get('[data-qa=button-internet]').click()
//.wait(2000)


/*cy.visit('/bundle/plans')

// Enable Pik Filters
cy.get('[data-testid="pilter-tags-Pik TV"]').click()
  .wait(3000)

// Disable Pik Filter
cy.get('[data-testid="pilter-tags-Pik TV-selected"]').click()
.wait(3000)

//Enable GWP
cy.get('[data-testid="pilter-tags-Gift With Purchase"]').click()
.wait(3000)
//Disable GWP
cy.get('[data-testid="pilter-tags-Gift With Purchase-selected"]').click()


 

  //cy.setCookie(Cypress.env('banner_Cookie_Name'))
 //.wait(3000)
 
  //cy.get('[style="position: absolute; z-index: 2000000004; width: 27px; height: 27px; background-color: transparent; border-width: 0px; border-color: rgb(51, 51, 51); border-style: solid; border-radius: 0px; display: block; left: 850px; bottom: 71px; cursor: pointer;"] > div > img').click();
*/

  
    })
  })
  