describe("favourite language", () => {
    it("shows user a message when they presses enter", () => {
        cy.visit("localhost:3000");
        cy.get("#username_search_bar").type(
        "richieganney"
        ).type('{enter}')
        cy.get("#favouriteLanguage").should("contain", "If I could hazard a guess, their favourite language would be")
    });

    it("shows nothing when the username is invalid", () => {
        cy.visit("localhost:3000");
        cy.get("#username_search_bar").type(
        "vygrhrbfkjvbjkfnvjarbgjkrvjkkjar"
        ).type('{enter}')
        cy.get("#favouriteLanguage").should("not.have.value", "favourite language is:")
    });
});