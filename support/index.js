// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************



// Import commands.js using ES2015 syntax:
import './commands'

// now any cookie with the name the name in the whitelist will
// not be cleared before each test runs
Cypress.Cookies.defaults({
  whitelist: 'QSI_SI_8II6mHwhblM7icZ_intercept'
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  

// promisified fs module 
const path = require('path'); 
const fs = require('fs-extra'); 

function getConfigurationByFile(file) { 
  const pathToConfigFile = path.resolve( 
    'cypress/config', 
    `cypress.${file}.json` 
  ); 

  return fs.readJson(pathToConfigFile); 
} 

module.exports = (on, config) => { 
  // accept a configFile value or use local by default 
  const file = config.env.configFile || 'local'; 

  return getConfigurationByFile(file); 
}; 
