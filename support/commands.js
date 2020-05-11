

/**
 * TO BE BUILT
 * getAuthHeaders - generates headers for an authenticated request
 * 
 * @returns object - an object with `auth.username`, `auth.password`, `headers.authentication` and `headers['t-session-token']` values
 */

// const getAuthHeaders = () => {
// }

Cypress.Commands.add('visitPage', (path, opts={}) => {
  cy.visit(path, {...opts, ...getStagingOpts()})
})

Cypress.Commands.add('visitHSCHomepage', (lang = "en") => {
  cy.visit(`/${lang}/shop/home`, getStagingOpts())
})

Cypress.Commands.add('visitExpressHomepage', (lang = "en") => {
  cy.visit(`/${lang}/shop/home-services/internet/plans`, getStagingOpts())
})

// Auth Request
// Uses the CREDENTIALS env variable
Cypress.Commands.add('getNewSession', (opts = {}) => {
  const sessionToken = getSessionToken().token
  opts.headers['t-session-token'] = sessionToken
  return cy.request({ ...opts, ...getStagingOpts() })
})
////
//Image Snapshot
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
  failureThreshold: 0.00,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.0 },
  //capture: 'viewport',
});


Cypress.Commands.add("setResolution", (size) => {
  if (Cypress._.isArray(size)) {
     cy.viewport(size[0], size[1]);
   } else {
    cy.viewport(size);
  }
 })