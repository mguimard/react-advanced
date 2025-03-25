let getByDataCy = (id) => cy.get(`[data-cy=${id}]`);

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="inc"').click();
    cy.get('[data-cy="inc"').click();
    cy.get('[data-cy="inc"').click();

    getByDataCy("inc").click();

    getByDataCy("counter").should("contain", "4");
  });
});
