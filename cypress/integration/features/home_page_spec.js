describe("homepage", () => {
    it("gives the user instructions when they visit the webpage", () => {
        cy.visit("localhost:3000");
        cy.get("#userInstructions").should("contain", "Enter a Github username")
    });
    
    it("does not show any language when user visits homepage", () => {
        cy.visit("localhost:3000");
        cy.get("#favouriteLanguage1").should("not.have.value", "If I could hazard a guess, their favourite language would be")
    });

    it("should contain a search bar", () => {
        cy.visit("localhost:3000");
        cy.get("#usernameSearchBar").should("contain", "")
    });
});
