describe("favourite language", () => {
    it("shows user an appropriate message when they enter a VALID username", () => {
        cy.visit("localhost:3000");
        cy.get("#usernameSearchBar").type(
        "richieganney"
        ).type('{enter}')
        cy.get("#favouriteLanguage1").should("contain", "If I could hazard a guess, their favourite language would be")
    });

    it("shows user an appropriate message when they enter an INVALID username", () => {
        cy.visit("localhost:3000");
        cy.get("#usernameSearchBar").type(
        "testtesttesttesttesttesttesttesttesttesttest"
        ).type('{enter}')
        cy.get("#favouriteLanguage2").should("contain", "That username is invalid, please try again")
    });
});