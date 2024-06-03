// Describe block for the test suite
describe("Internet PDP FIFA", () => {
  // Test case for getting, typing, and visual tests
  it("Gets, types and visual tests", () => {
    // Visit Home and begin qualification
    cy.visit("/");
    cy.contains("Get started").click();

    // Qualify Compass address
    cy.get("#autocomplete-form-address-google").type(
      Cypress.env("address_FIFA")
    );
    cy.contains("Check availability").click().wait(7000);

    // Visit Internet 750 2yr PDP
    cy.visit("/product/internet-750-750");

    // Set cookie to prevent purple banner from appearing
    cy.setCookie("QSI_SI_8II6mHwhblM7icZ_intercept", "true").wait(3000);

    // Opens Terms & Conditions section
    cy.contains("View terms and conditions").click().wait(2000);

    // Snapshot page for comparison
    cy.matchImageSnapshot("Internet 750 2yr PDP");

    // Go to Internet 150 no-term PDP
    cy.contains("Switch to no term plan").click().wait(2000);

    // Set cookie to prevent purple banner from appearing
    cy.setCookie("QSI_SI_8II6mHwhblM7icZ_intercept", "true").wait(3000);

    // Opens Terms & Conditions section
    cy.contains("View terms and conditions").click().wait(2000);

    // Snapshot page for comparison
    cy.matchImageSnapshot("Internet 150 NoTerm PDP");

    // Visit Internet 25 2yr PDP
    cy.visit("/product/internet-25-25");

    // Set cookie to prevent purple banner from appearing
    cy.setCookie("QSI_SI_8II6mHwhblM7icZ_intercept", "true").wait(3000);

    // Opens Terms & Conditions section
    cy.contains("View terms and conditions").click().wait(2000);

    // Snapshot page for comparison
    cy.matchImageSnapshot("Internet 25 2yr PDP");

    // Go to Internet 25 no-term PDP
    cy.contains("Switch to no term plan").click().wait(2000);

    // Set cookie to prevent purple banner from appearing
    cy.setCookie("QSI_SI_8II6mHwhblM7icZ_intercept", "true").wait(3000);

    // Opens Terms & Conditions section
    cy.contains("View terms and conditions").click().wait(2000);

    // Snapshot page for comparison
    cy.matchImageSnapshot("Internet 25 NoTerm PDP");
  });
});
