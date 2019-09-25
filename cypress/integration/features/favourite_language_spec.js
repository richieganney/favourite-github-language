describe("favourite language", () => {
    it("shows 'users favourite language is:' when user presses enter", () => {
        cy.visit("localhost:3000");
        cy.get("#username_search_bar").type(
        "richieganney"
        ).type('{enter}')
        cy.get("#favouriteLanguage").should("contain", "favourite language is:")
    });
});