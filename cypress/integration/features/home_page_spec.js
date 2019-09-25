describe("homepage", () => {
    it("shows 'users favourite language is:' when user presses enter", () => {
        cy.visit("localhost:3000");
        cy.get("#favouriteLanguage").should("not.have.value", "favourite language is:")
    });
});