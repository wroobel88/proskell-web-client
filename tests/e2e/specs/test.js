// https://docs.cypress.io/api/introduction/api.html

describe("Example test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("button", "Wyślij");
  });
});
