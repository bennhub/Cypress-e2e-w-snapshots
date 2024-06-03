// Describe block for the test suite
describe("Optik PLP FIFA", () => {
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

    // Lands back on the home page
    // Go to internet plans
    cy.get("[data-qa=button-optik]").click().wait(2000);

    // Set cookie to prevent purple banner from appearing
    cy.setCookie("QSI_SI_8II6mHwhblM7icZ_intercept", "true").wait(3000);

    // Open Terms & Conditions section
    cy.contains("View terms and conditions").click().wait(2000);

    // Snapshot page for comparison
    cy.matchImageSnapshot("Optik PLP");
  });
});
