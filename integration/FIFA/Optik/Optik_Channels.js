// Describe block for the test suite
describe("Optik Channels FIFA", () => {
  // Test case for getting, typing, and visual testing
  it("Gets, types and visual tests", () => {
    // Visit Home and begin qualification
    cy.visit("/");
    cy.contains("Get started").click();

    // Qualify Compass address
    cy.get("#autocomplete-form-address-google").type(
      Cypress.env("address_FIFA")
    );
    cy.contains("Check availability").click().wait(7000);

    // Go to Optik plans
    cy.get("[data-qa=button-optik]").click().wait(2000);

    // Set cookie to prevent purple banner from appearing
    cy.setCookie("QSI_SI_8II6mHwhblM7icZ_intercept", "true").wait(3000);

    // Click on Themepack and channels tab
    cy.contains("Theme packs and channels").click().wait(3000);

    // Perform visual tests for filters
    testFilterSnapshot("Category");
    testFilterSnapshot("Language");
    testFilterSnapshot("Type");

    // Open FAQ
    cy.contains("Frequently Asked Questions").click().wait(2000);

    // Open Terms & Conditions section
    cy.contains("View terms and conditions").click().wait(2000);

    // Snapshot page for comparison
    cy.matchImageSnapshot("Optik Channels");
  });
});

// Helper function to perform visual tests for filters
function testFilterSnapshot(filterName) {
  cy.contains(filterName).click().wait(3000);
  cy.get(
    `:nth-child(${filterIndex[filterName]}) > .style__Overlay-sc-1cjw4jg-2`
  ).matchImageSnapshot(`${filterName} filter`);
}

// Map of filter indices
const filterIndex = {
  Category: 1,
  Language: 2,
  Type: 3,
};
