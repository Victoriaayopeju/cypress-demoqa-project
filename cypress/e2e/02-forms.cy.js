describe('Demo QA Forms', () => {
  beforeEach(() => {
     cy.visit('https://demoqa.com/');
});
   it('should fill the practice form with valid data and submit', () => {
    cy.contains('Forms').click();
    cy.contains('Practice Form').click();

    cy.get('#firstName').type('Victoria');
    cy.get('#lastName').type('Akinola');
    cy.get('#userEmail').type('akinolavictoria21@gmail.com');
    cy.get(':nth-child(2) > [name="gender"]').check({ force: true });
    cy.get('#userNumber').type('08034569200');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('1994');
    cy.get('.react-datepicker__day--022').click();
    cy.get('.subjects-auto-complete__input-container').type('Maths');
    cy.contains('.subjects-auto-complete__option', 'Maths').click();
    cy.get('#hobbies-checkbox-3').check({ force: true });
    cy.get('#uploadPicture').selectFile('cypress/fixtures/victoria.jpeg.png')
    cy.get('#currentAddress').type('Omole Estate Phase 2')
    cy.get('#state').click();
    cy.contains('NCR').click()
    cy.get('#city').click();
    cy.contains('Delhi').click();
    cy.get('#submit').click();

    //Verify that the Modal Appears With Correct Data
     cy.get('.modal-content').should('be.visible');
        cy.get('td').contains('Victoria Akinola');
        cy.get('td').contains('akinolavictoria21@gmail.com');
        cy.get('td').contains('Female');
        cy.get('td').contains('0803456920');
        cy.get('td').contains('22 February,1994');
        cy.get('td').contains('Maths');
        cy.get('td').contains('Music'); 
        cy.get('td').contains('victoria.jpeg.png'); 
        cy.get('td').contains('Omole Estate Phase 2');
        cy.get('td').contains('NCR Delhi');

    })
      it('should validate required fields before submission', () => {
        cy.contains('Forms').click();
        cy.contains('Practice Form').click();

        cy.get('#submit').click(); 

        cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('input[name="gender"]:checked').should('not.exist');
        cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)')

        cy.get('#firstName').type('Victoria');
        cy.get('#userNumber').type('0803456920');
        cy.get('#submit').click();

        cy.get('.modal-content').should('not.exist')

        //Fill all Required Fields
        cy.get('#lastName').type('Akinola');
        cy.get(':nth-child(2) > [name="gender"]').click();
        cy.get('#submit').click();

        //Verify success
        cy.get('.modal-content').should('be.visible');
        cy.contains('Thanks for submitting the form').should('be.visible');
        
    }) 

});
