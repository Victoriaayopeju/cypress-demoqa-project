Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-testid="${selector}"]`);
});