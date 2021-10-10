describe("User can see menu", () => {
  beforeEach(() => {
    cy.intercept("**api/products", {
      fixture: "menuItems.json",
    });
    cy.visit("/");
    cy.get("[data-cy=menu]").click();
  });
 
  describe("User can see menu-items by category", () => {
    it.only("is expected to display the content of starter-menu", () => {
      cy.get("[data-cy=starter-tab]").click();
      cy.get("[data-cy=menu-section]").children().should("have.length", 2);
      cy.get("[data-cy=item-1]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Insect");
        cy.get("[data-cy=description]").should("contain", "Creepy Crawlies");
        cy.get("[data-cy=price]").should("contain", "250 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=add-to-basket-1]").should("be.visible");
      });
    });

    it("is expected to display the content of main courses", () => {
      cy.get("[data-cy=main-courses-tab]").click();
      cy.get("[data-cy=menu-section]").children().should("have.length", 2);
      cy.get("[data-cy=item-3]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Kangaroo Steak");
        cy.get("[data-cy=description]").should("contain", "Bouncy bouncy");
        cy.get("[data-cy=price]").should("contain", "500 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=add-to-basket-3]").should("be.visible");
      });
    });

    it("is expected to display the content of the desset", () => {
      cy.get("[data-cy=desserts-tab]").click();
      cy.get("[data-cy=menu-section]").children().should("have.length", 2);
      cy.get("[data-cy=item-5]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Durian");
        cy.get("[data-cy=description]").should("contain", "Smelly smelly");
        cy.get("[data-cy=price]").should("contain", "100 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=add-to-basket-5]").should("be.visible");
      });
    });

    it("is expected to display the content of the sides", () => {
      cy.get("[data-cy=sides-tab]").click();
      cy.get("[data-cy=menu-section]").children().should("have.length", 1);
      cy.get("[data-cy=item-7]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Bread");
        cy.get("[data-cy=description]").should("contain", "Bread");
        cy.get("[data-cy=price]").should("contain", "15 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=add-to-basket-7]").should("be.visible");
      });
    });

    it("is expected to display the contenet of the drinks", () => {
      cy.get("[data-cy=drinks-tab]").click();
      cy.get("[data-cy=menu-section]").children().should("have.length", 1);
      cy.get("[data-cy=item-8]").within(() => {
        cy.get("[data-cy=name]").should("contain", "Mouse Wine");
        cy.get("[data-cy=description]").should("contain", "Squeek!");
        cy.get("[data-cy=price]").should("contain", "35 kr");
        cy.get("[data-cy=image]").should("be.visible");
        cy.get("[data-cy=add-to-basket-8]").should("be.visible");
      });
    });
  });
});
