// Describe block for the test suite
describe("Internet Plans", () => {
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
    cy.get("[data-qa=button-internet]").click().wait(2000);

    // Enable Cypress Cookies debug mode
    Cypress.Cookies.debug(true);

    // Set cookie to prevent purple banner from appearing
    cy.setCookie("QSI_SI_8II6mHwhblM7icZ_intercept", "true");

    // Expand See More Section
    cy.contains("See more plans").click().wait(2000);

    // Click view details drop for 2 year term
    cy.get("[data-qa=link-details-internet-150-150-24]").click();
    cy.get("[data-qa=link-details-internet-300-300-24]").click();
    cy.get("[data-qa=link-details-gigabit-internet-24]").click();
    cy.get("[data-qa=link-details-internet-750-750-24]").click();
    cy.get("[data-qa=link-details-internet-75-75-24]").click();
    cy.get("[data-qa=link-details-internet-25-25-24]").click();

    // Opens FAQ section
    cy.contains("Frequently Asked Questions").click().wait(2000);

    // Opens Terms & Conditions section
    cy.contains("View terms and conditions").click().wait(2000);

    // Snap full page exposure for 2 year term
    cy.matchImageSnapshot("Internet plans 2yr");

    // Uncheck to see no-term plan
    cy.get("[data-qa=checkbox-internet-150-150-24]").click();
    cy.get("[data-qa=checkbox-internet-300-300-24]").click();
    cy.get("[data-qa=checkbox-gigabit-internet-24]").click();
    cy.get("[data-qa=checkbox-internet-750-750-24]").click();
    cy.get("[data-qa=checkbox-internet-75-75-24]").click();
    cy.get("[data-qa=checkbox-internet-25-25-24]").click();

    // Click view details drop for no term
    cy.get("[data-qa=link-details-internet-150-150-0]").click();
    cy.get("[data-qa=link-details-internet-300-300-0]").click();
    cy.get("[data-qa=link-details-gigabit-internet-0]").click();
    cy.get("[data-qa=link-details-internet-750-750-0]").click();
    cy.get("[data-qa=link-details-internet-75-75-0]").click();
    cy.get("[data-qa=link-details-internet-25-25-0]").click();

    // Snap full page exposure for no -term
    cy.matchImageSnapshot("Internet plans no term");
  });
});
