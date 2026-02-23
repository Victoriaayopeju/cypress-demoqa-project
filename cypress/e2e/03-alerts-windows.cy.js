describe('Demo QA Alerts', () => {
  beforeEach(() => {
     cy.visit('https://demoqa.com/');
});
   it('click button to see Alerts', () => {
    cy.contains('Alerts, Frame & Windows').click();
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-1 > .router-link > .text').click();

    cy.get('#alertButton').click();
    cy.on('window:alert',(text) => {
       expect(text).to.contains('You clicked a button');
    })

    cy.get('#timerAlertButton').click();
    cy.wait(6000); 
    cy.on('window:alert', (text) => {
        expect(text).to.contains('This alert appeared after 5 seconds');
    });



   })

})

  