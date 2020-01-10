# Cata_Automation_E2E

Run Full Test Regression: npx cypress run

Run Full Test Regression Updating all Base Images: npm run cy:run  --env updateSnapshots=true

Run single Test: npm run cy:run --  --spec "cypress/integration/Compass/Bundles_PLP_PDP.spec.js"

Run Test via Visual Test Ruuner: npx cypress open


Cypress Image snapshot commands
---------------------------------

Single test with snapshot report in terminal (using iTerm)
----------------------------------------------------
npm run cy:run --  --spec "cypress/integration/Compass/Bundles_PLP_PDP.spec.js" --reporter cypress-image-snapshot/reporter

Single test - update base image
-------------------------------------
npm run cy:run --  --spec "cypress/integration/Compass/Bundles/Bundles_PLP_PDP.spec.js" --env updateSnapshots=true

Single test - prevent test failures when an image diff does not pass.
-------------------------------------
npm run cy:run --  --spec "cypress/integration/Bundles/Bundles_PLP_PDP.spec.js" --env failOnSnapshotDiff=false

Single test - quickly view all failing snapshots and their diffs.
-------------------------------------
npm run cy:run --  --spec "cypress/integration/Bundles/Bundles_PLP_PDP.spec.js" --reporter cypress-image-snapshot/reporter --env failOnSnapshotDiff=false


MORE INFO:
-----
Updating snapshots
Run Cypress with --env updateSnapshots=true in order to update the base image files for all of your tests.

Preventing failures
Run Cypress with --env failOnSnapshotDiff=false in order to prevent test failures when an image diff does not pass.

Reporter
Run Cypress with --reporter cypress-image-snapshot/reporter in order to report snapshot diffs in your test results. This can be helpful to use with --env failOnSnapshotDiff=false in order to quickly view all failing snapshots and their diffs.

If you using iTerm2, the reporter will output any image diffs right in your terminal 😎.
