// Describe block for the test suite
describe("Internet GWP FIFA", () => {
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

    // Visit Internet 150 2yr PDP
    cy.visit("/internet/gifts");

    // Set cookie to prevent purple banner from appearing
    cy.setCookie("QSI_SI_8II6mHwhblM7icZ_intercept", "true").wait(3000);

    // Opens Terms & Conditions section
    cy.contains("View terms and conditions").click().wait(2000);

    // Snapshots page for comparison
    cy.matchImageSnapshot("Internet GWP PLP");

    // Visit Internet GWP Visa PDP
    cy.visit("/product/200-visa");

    // Set cookie to prevent purple banner from appearing
    cy.setCookie("QSI_SI_8II6mHwhblM7icZ_intercept", "true").wait(3000);

    // Opens Terms & Conditions section
    cy.contains("View terms and conditions").click().wait(2000);

    // Snapshots page for comparison
    cy.matchImageSnapshot("Internet GWP Visa PDP");
  });
});
