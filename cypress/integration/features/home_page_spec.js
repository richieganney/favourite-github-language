describe("homepage", () => {
    it("does not show any language when user visits homepage", () => {
        cy.visit("localhost:3000");
        cy.get("#favouriteLanguage").should("not.have.value", "favourite language is:")
    });

    it("gives the user instructions when they visit the webpage", () => {
        cy.visit("localhost:3000");
        cy.get("#userInstructions").should("contain", "Enter a Github username to find their favourite language")
    });
});
