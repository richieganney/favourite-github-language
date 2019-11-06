describe("favourite language", () => {
    it("shows user an appropriate message when they enter a VALID username", () => {
        cy.visit("http://10.0.2.15:3000/");
        cy.get("#usernameSearchBar").type(
            "richieganney"
        ).type('{enter}')
        cy.get("#favouriteLanguage1").should("contain", "My best guess is that their favourite language is")
    });

    it("shows user an appropriate message when they enter an INVALID username", () => {
        cy.visit("http://10.0.2.15:3000/");
        cy.get("#usernameSearchBar").type(
            "testtesttesttesttesttesttesttesttesttesttest"
        ).type('{enter}')
        cy.get("#favouriteLanguage2").should("contain", "That username is invalid, please try again")
    });
});