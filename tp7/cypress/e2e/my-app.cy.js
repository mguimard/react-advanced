describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-testid="the_button"').click();
    cy.get('[data-testid="the_button"').should("contain", "Logout");
    cy.get('[data-testid="the_button"').click();
    cy.get('[data-testid="the_button"').should("contain", "Login");
  })
})