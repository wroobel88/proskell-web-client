describe("Validation", () => {
  it("works as expected", () => {
    cy.visit("/");
    cy.get("#studentNo").click().should("not.have.class", "is-danger");
    cy.get("#exerciseNo").click();
    cy.get("#studentNo").should("have.class", "is-danger");
    cy.get("button.is-success").should("be.disabled");
    cy.get("#exerciseNo").should("not.have.class", "is-danger");
    cy.get("#code").click();
    cy.get("#exerciseNo").should("have.class", "is-danger");
    cy.get("button.is-success").should("be.disabled");
    cy.get("#code").should("not.have.class", "is-danger");
    cy.get("#languageValue").select("Haskell");
    cy.get("#code").should("have.class", "is-danger");
    cy.get("button.is-success").should("be.disabled");
    cy.get("#studentNo")
      .type("ABCDEF")
      .should("have.class", "is-danger")
      .clear()
      .should("have.class", "is-danger")
      .type("123456")
      .should("not.have.class", "is-danger");
    cy.get("button.is-success").should("be.disabled");
    cy.get("#exerciseNo").type("1");
    cy.get("#languageValue").select("Prolog").select("Haskell");
    cy.get("#code").type(
      'main = do putStrLn "Haskell main()"\n          line <- getLine\n          putStrLn ("First line from stdin:" ++ line)'
    );
    cy.get("button.is-success").should("not.be.disabled");
  });
});
