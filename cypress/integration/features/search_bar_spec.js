describe("search bar", () => {
    it("lets the user type into the search bar", () => {
        cy.visit("localhost:3000");
        cy.get("#usernameSearchBar").type(
        "richieganney"
        )
    });

    it("clears the search bar once the user entered a VALID username", () => {
        cy.visit("localhost:3000");
        cy.get("#usernameSearchBar").type(
        "richieganney"
        ).type('{enter}')
        cy.get("#usernameSearchBar").should("not.have.value", "richieganney")
    })

    it("clears the search bar once the user entered an INVALID username", () => {
        cy.visit("localhost:3000");
        cy.get("#usernameSearchBar").type(
        "testtesttesttesttesttesttesttesttesttesttest"
        ).type('{enter}')
        cy.get("#usernameSearchBar").should("not.have.value", "testtesttesttesttesttesttesttesttesttesttest")
    })
});
