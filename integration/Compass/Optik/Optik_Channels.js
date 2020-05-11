describe('Optik Channels', function() {
    it('Gets, types and visual tests', function() {


//Visit base url then qual compass
cy.visit('/')
  .contains('Get started').click()
  .fillCompassAddress() 
   
//lands back on home page
cy.visit('/')
//Go to Optik plans 
cy.get('[data-qa=button-optik]').click()
.wait(2000)

//sets cookie so purple banner does not apppear 
cy.setCookie('QSI_SI_8II6mHwhblM7icZ_intercept','true' )
.wait(3000)

//Click on Themepack and channels tab
cy.contains('Theme packs and channels').click()
.wait(3000) 

//Click on category filter
cy.contains('Category').click()
.wait(3000) 
// optik category filter snap
cy.get(':nth-child(1) > .style__Overlay-sc-1cjw4jg-2').matchImageSnapshot('Category filter')

//Click on Language filter
cy.contains('Language').click()
.wait(3000) 
// optik Language filter snap
cy.get(':nth-child(2) > .style__Overlay-sc-1cjw4jg-2').matchImageSnapshot('Language filter')

//Click on Type filter
cy.contains('Type').click()
.wait(3000)
// optik Type filter snap
cy.get(':nth-child(3) > .style__Overlay-sc-1cjw4jg-2').matchImageSnapshot('Type filter')

//Opens FAQ
cy.contains('Frequently Asked Questions').click()
.wait(2000) 

//Opens T & C section
cy.contains('View terms and conditions').click()
.wait(2000) 

//snapshots page for comparison
cy.matchImageSnapshot("Optik Channels");



    })
  })
  