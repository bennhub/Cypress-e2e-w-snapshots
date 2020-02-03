# Cata_Automation_E2E

**To Run Install Cypress and Cypress Image Snapshot**
----------------------------------------------------

Install Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing

and Image Snapshot: https://www.npmjs.com/package/cypress-image-snapshot

Once installed, clone repo then use the following commands to execute. Make sure to run with --env updateSnapshots=true first to add the base images.


**Top Commands**

```npm run cy:run --  --spec "cypress/integration/FIFA/**/*" --env failOnSnapshotDiff=false```

```npm run cy:run --  --spec "cypress/integration/Compass/**/*" --env failOnSnapshotDiff=false```

```npm run cy:run --  --spec "cypress/integration/FIFA/**/*" --env updateSnapshots=true```

```npm run cy:run --  --spec "cypress/integration/Compass/**/*" --env updateSnapshots=true```



**Commands of Execution**

Run Full Test Regression: ``` npx cypress run```

Run Full Test Regression Updating all Base Images: ```npm run cy:run  --env updateSnapshots=true```

Run single Test: ``` npm run cy:run --  --spec "cypress/integration/Compass/Bundles/Bundles_PLP_PDP.spec.js"```

Run Test from Specific Folder: ```npm run cy:run --  --spec "cypress/integration/FIFA/**/*"```

Run Test via Visual Test Runner: ``` npx cypress open```


# Cypress Image snapshot commands and combos

**Single test output any image diffs in Terminal (using iTerm)**
----------------------------------------------------
```npm run cy:run --  --spec "cypress/integration/Compass/Bundles/Bundles_PDP.js" --reporter cypress-image-snapshot/reporter```

**Single test - update base image**
-------------------------------------
```npm run cy:run --  --spec "cypress/integration/Compass/Bundles/Bundles_PLP.js" --env updateSnapshots=true```

Update base images in Specific Folder
-------------------------------------

Run Test from Specific Folder/ Update Base: ```npm run cy:run --  --spec "cypress/integration/FIFA/**/*" --env updateSnapshots=true```

Single test - prevent test failures when an image diff does not pass.
-------------------------------------
```npm run cy:run --  --spec "cypress/integration/Bundles/Bundles_PLP_PDP.spec.js" --env failOnSnapshotDiff=false```

Single test - quickly view all failing snapshots and their diffs.
-------------------------------------
```npm run cy:run --  --spec "cypress/integration/Bundles/Bundles_PLP_PDP.spec.js" --reporter cypress-image-snapshot/reporter --env failOnSnapshotDiff=false```


MORE INFO:
-----
Updating snapshots
Run Cypress with ```--env updateSnapshots=true```in order to update the base image files for all of your tests.

Preventing failures
Run Cypress with``` --env failOnSnapshotDiff=false``` in order to prevent test failures when an image diff does not pass.

Reporter
Run Cypress with``` --reporter cypress-image-snapshot/reporter``` in order to report snapshot diffs in your test results. This can be helpful to use with ```--env failOnSnapshotDiff=false``` in order to quickly view all failing snapshots and their diffs.

If you using iTerm2, the reporter will output any image diffs right in your terminal 😎.
