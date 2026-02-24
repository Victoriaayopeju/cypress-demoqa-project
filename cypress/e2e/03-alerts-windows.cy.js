describe('DEMO QA ALERTS, FRAMES & WINDOWS', () => {
   beforeEach(() => {
     cy.visit('https://demoqa.com/');
});

  it('should open a new tab and verify expected content', () => {
    cy.contains('Alerts, Frame & Windows').click();
    cy.contains('Browser Windows').click();

    cy.get('#tabButton').click
  
  })

}) 