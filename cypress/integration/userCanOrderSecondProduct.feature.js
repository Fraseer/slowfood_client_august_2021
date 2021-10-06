describe("user adds a second product to existing order", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/products", {
      fixture: "menuItems.json",
    });
    cy.intercept("POST", "**api/carts", {
      statusCode: 201,
      fixture: "successfulAddOrderResponse.json",
    }).as("firstProductRequest");
    cy.intercept("PUT", "**api/carts", {
      statusCode: 200,
      fixture: "successfulAddSecondProductToOrderResponse.json",
    }).as("secondProductRequest");
    cy.visit("/");
    cy.get("[data-cy=menu]").click();
    cy.get("[data-cy=add-to-basket-1]").click();
  });

  describe("when the server responds with a 200 status", () => {
    it("is expected to display a success message", () => {
      cy.get("[data-cy=add-to-basket-2]").click();
      cy.wait("@secondProductRequest")
        .its("response.statusCode")
        .should("eq", 200);
      cy.get("[data-cy=flash-message]").should(
        "contain.text",
        "Fecies Lava Mountain was added to your cart!"
      );
    });
  });
});
