describe('Demo QA Widgets', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/')
})

 it('sort list items using sortables', () => {
  cy.contains('Interactions').click();
  cy.contains('Sortable').click();

   cy.get('.list-item').then(($items) => {
      const initialOrder = [...$items].map(el => el.innerText.trim());
      expect(initialOrder).to.deep.equal(['Item 1', 'Item 2', 'Item 3']); // Example initial order
    });
   })


   });