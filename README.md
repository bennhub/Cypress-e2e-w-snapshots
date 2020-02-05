# Cata_Automation_E2E

**To Run Install Cypress and Cypress Image Snapshot**
----------------------------------------------------

Install Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing

and Image Snapshot: https://www.npmjs.com/package/cypress-image-snapshot

Once installed, clone repo then use the following commands to execute. Make sure to run with --env updateSnapshots=true first to add the base images.

**To run on different enviroments use:**

```cypress:run:stage```

```cypress:run:prod```

so an example of a full command would be:

**Runs FIFA Regression on staging

```npm run cypress:run:stage --  --spec "cypress/integration/FIFA/**/*" ```

**Runs FIFA Regression on prod

```npm run cypress:run:prod --  --spec "cypress/integration/FIFA/**/*" ```


**Run test with record option**

```npm run cypress:run:ENV --  --spec "cypress/integration/Compass/**/*" --record --key b66f840e-d39c-4d1a-b6e9-11dcefe8f402``

**Top Commands**

Run regressions based on FIFA or Compass Flow - don't fail tests on snapshot diffs

```npm run cypress:run:ENV --  --spec "cypress/integration/FIFA/**/*" --env failOnSnapshotDiff=false```

```npm run cypress:run:ENV --  --spec "cypress/integration/Compass/**/*" --env failOnSnapshotDiff=false```

Run regressions based on FIFA or Compass Flow - update all base images

```npm run cypress:run:ENV --  --spec "cypress/integration/FIFA/**/*" --env updateSnapshots=true```

```npm run cypress:run:ENV --  --spec "cypress/integration/Compass/**/*" --env updateSnapshots=true```
`



**Commands of Execution**

Run Full Test Regression: ``` npx run cypress:run:ENV```

Run Full Test Regression Updating all Base Images: ```npm run cypress:run:ENV  --env updateSnapshots=true```

Run single Test: ``` npm run cypress:run:ENV --  --spec "cypress/integration/Compass/Bundles/Bundles_PLP.js"```

Run Test from Specific Folder: ```npm run cypress:run:ENV --  --spec "cypress/integration/FIFA/**/*"```

Run Test via Visual Test Runner: ``` npm run cypress:open:ENV```


# Cypress Image snapshot commands and combos

**Single test output any image diffs in Terminal (using iTerm)**

```npm run cy:run --  --spec "cypress/integration/Compass/Bundles/Bundles_PDP.js" --reporter cypress-image-snapshot/reporter```

**Single test - update base image**

```npm run cy:run --  --spec "cypress/integration/Compass/Bundles/Bundles_PLP.js" --env updateSnapshots=true```

**Update base images in Specific Folder**


Run Test from Specific Folder/ Update Base: ```npm run cy:run --  --spec "cypress/integration/FIFA/**/*" --env updateSnapshots=true```

**Single test - prevent test failures when an image diff does not pass**

```npm run cy:run --  --spec "cypress/integration/Bundles/Bundles_PLP_PDP.spec.js" --env failOnSnapshotDiff=false```

**Single test - quickly view all failing snapshots and their diffs**

```npm run cy:run --  --spec "cypress/integration/Bundles/Bundles_PLP_PDP.spec.js" --reporter cypress-image-snapshot/reporter --env failOnSnapshotDiff=false```


**MORE INFO:**

Updating snapshots
Run Cypress with ```--env updateSnapshots=true```in order to update the base image files for all of your tests.

Preventing failures
Run Cypress with``` --env failOnSnapshotDiff=false``` in order to prevent test failures when an image diff does not pass.

Reporter
Run Cypress with``` --reporter cypress-image-snapshot/reporter``` in order to report snapshot diffs in your test results. This can be helpful to use with ```--env failOnSnapshotDiff=false``` in order to quickly view all failing snapshots and their diffs.

If you using iTerm2, the reporter will output any image diffs right in your terminal 😎.
