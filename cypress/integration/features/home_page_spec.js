describe("homepage", () => {
    it("does not show any language when user visits homepage", () => {
        cy.visit("localhost:3000");
        cy.get("#favouriteLanguage").should("not.have.value", "favourite language is:")
    });
});