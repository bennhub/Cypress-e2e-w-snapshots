
//Image Snapshot
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
  failureThreshold: 0.00,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0 },
  //capture: 'viewport',
});


Cypress.Commands.add("setResolution", (size) => {
  if (Cypress._.isArray(size)) {
     cy.viewport(size[0], size[1]);
   } else {
    cy.viewport(size);
  }
 })


 const getOpts = () => {
  const credentials = Cypress.env('CREDENTIALS')
  const opts = {}
  cy.log(credentials)
  if(credentials) {
    const [ username, password ] = credentials.split(':')
    opts.auth = {
      username,
      password
    }
  }
  return opts
}

Cypress.Commands.add('visitAuthed', (path, opts={}) => {
  cy.visit(path, {...opts, ...getOpts()})
})

Cypress.Commands.add('visitHSCHomepage', (lang = "en") => {
  cy.visit(`/${lang}/shop/home`, getOpts())
})

Cypress.Commands.add('visitExpressHomepage', (lang = "en") => {
  cy.visit(`/${lang}/shop/home-services/internet/plans`, getOpts())
})