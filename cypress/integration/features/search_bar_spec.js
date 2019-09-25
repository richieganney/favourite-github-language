it("lets the user type into the search bar", () => {
    cy.visit("localhost:3000");
    cy.get("#username_search_bar").type(
    "richieganney"
    )
});
