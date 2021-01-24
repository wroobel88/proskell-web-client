describe("Simple flow", () => {
  it("works as expected", () => {
    cy.visit("/");
    cy.get("#studentNo").type("123456");
    cy.get("#exerciseNo").type("1");
    cy.get("#languageValue").select("Prolog").select("Haskell");
    cy.get("#code").type(
      'main = do putStrLn "Haskell main()"\n          line <- getLine\n          putStrLn ("First line from stdin:" ++ line)'
    );
    cy.get("button.is-success").click();
    cy.contains("Trwa przetwarzanie");
    cy.contains("h1", "Raport z testowania");
    cy.get("td.has-text-success").should("have.length", 5);
    cy.get("button.is-info").click();
    cy.contains("button.is-success", "Wyślij");
  });
});
