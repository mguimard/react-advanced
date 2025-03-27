describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.ant-flex-align-stretch > :nth-child(1) > :nth-child(2)').click();
    cy.get('[data-testid="the_button"] > :nth-child(2)').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item').click();
    cy.get(':nth-child(1) > [data-testid="led"] > .ant-avatar-string > [data-testid="led_name"]').click();
    cy.get(':nth-child(2) > [data-testid="led"]').click();
    cy.get(':nth-child(3) > [data-testid="led"] > .ant-avatar-string > [data-testid="led_name"]').click();
    cy.get(':nth-child(4) > [data-testid="led"] > .ant-avatar-string > [data-testid="led_name"]').click();
    cy.get(':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item').click();
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
    cy.get(':nth-child(1) > [data-testid="led"] > .ant-avatar-string > [data-testid="led_name"]').click();
    cy.get(':nth-child(1) > .ant-switch > .ant-switch-handle').click();
    cy.get(':nth-child(1) > [data-testid="led"] > .ant-avatar-string > [data-testid="led_name"]').click();
    /* ==== End Cypress Studio ==== */
  })
})