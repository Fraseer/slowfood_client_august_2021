describe("User can enter user data", () => {
  beforeEach(() => {
    cy.intercept("POST", "**api/auth/sign_in", {
      fixture: "loginFixture.json",
    });
    cy.visit("/");
    cy.get("[data-cy=login-btn]").click();
  });

  it("is expected to have two input fields, a submit button and a status", () => {
    cy.get("form").children().should("have.length", 3);
    cy.get("[data-cy=login-status]").should("contain", "Logged Out");
  });

  describe("the user can login", () => {
    before(() => {
      cy.get("[data-cy=email-input]").type("example@email.com");
      cy.get("[data-cy=password-input]").type("password");
      cy.get("[data-cy=submission-login]").click();
    });

    it("is expected that the login status changes", () => {
      cy.get("[data-cy=login-status]").should("contain", "Logged In");
    });

    // it("is expected to bring you to the Menu Page", () => {
    //   cy.get("[data-cy=starter-tab]").should("be.visible");
    // });
  });
});
