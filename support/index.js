
// Import commands.js using ES2015 syntax:
import './commands'
import './Qual_Compass_Fifa'

// now any cookie with the name the name in the whitelist will
// not be cleared before each test runs
Cypress.Cookies.defaults({
  preserve: 'QSI_SI_8II6mHwhblM7icZ_intercept'
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
