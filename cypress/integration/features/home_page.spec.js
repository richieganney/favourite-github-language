describe("homepage", () => {
    it("gives the user instructions when they visit the webpage", () => {
        cy.visit("http://favlingo.herokuapp.com/");
        cy.get("#userInstructions").should("contain", "Enter a Github username")
    });
    
    it("does not show any language when user visits homepage", () => {
        cy.visit("http://favlingo.herokuapp.com/");
        cy.get("#favouriteLanguage1").should("not.have.value", "My best guess is that their favourite language is")
    });

    it("should contain a search bar", () => {
        cy.visit("http://favlingo.herokuapp.com/");
        cy.get("#usernameSearchBar").should("contain", "")
    });
});
