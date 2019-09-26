describe("search bar", () => {
    it("lets the user type into the search bar", () => {
        cy.visit("localhost:3000");
        cy.get("#username_search_bar").type(
        "richieganney"
        )
    });

    it("clears the search bar once the user has pressed enter", () => {
        cy.visit("localhost:3000");
        cy.get("#username_search_bar").type(
        "richieganney"
        ).type('{enter}')
        cy.get("#username_search_bar").should("not.have.value", "richieganney")
    })
});
