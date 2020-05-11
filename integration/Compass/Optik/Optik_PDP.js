describe('Optik Plans PDP', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillCompassAddress() 
   
cy.visit('/')
//visit Optik Essentials 2yr PDP Plans
cy.visit('/product/essentials-mediaroomtv-hs2-0')


//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

 //Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Optik Essentials 2yr PLP");

//visit Optik 4TP+1 Noterm PDP
cy.visit('/product/4-theme-packs-1-premium-mediaroomtv-hs2-0?variant=f5172855730be3ee2355fa783d37589f')


//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

 
//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Optik 4TP+1P no-term PLP");


    })
  })
  