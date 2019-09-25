describe("favourite language", () => {
    it("shows 'users favourite language is:' when user presses enter", () => {
        cy.visit("localhost:3000");
        cy.get("#username_search_bar").type(
        "richieganney"
        ).type('{enter}')
        cy.get("#favouriteLanguage").should("contain", "favourite language is:")
    });

    it("shows nothing when the username is invalid", () => {
        cy.visit("localhost:3000");
        cy.get("#username_search_bar").type(
        "vygrhrbfkjvbjkfnvjarbgjkrvjkkjar"
        ).type('{enter}')
        cy.get("#favouriteLanguage").should("not.have.value", "favourite language is:")
    });
});