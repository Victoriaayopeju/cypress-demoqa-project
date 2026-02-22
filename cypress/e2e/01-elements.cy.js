describe('Demo QA Elements', () => {
      beforeEach(() => {
        cy.visit('https://demoqa.com/');
});
      //Text Box
    it('should fill in all fields and submit', () => {
        cy.contains('Elements').click();          
        cy.contains('Text Box').click();
        cy.get('#userName').type('Victoria')
        cy.get('#userEmail').type('akinolavictoria21@gmail.com')
        cy.get('#currentAddress').type('Omole Phase 2 Estate')
        cy.get('#permanentAddress').type('Ikeja, Lagos')
        cy.get('#submit').click();
        
        cy.get('#output #name').should('contain.text', 'Victoria');
        cy.get('#output #email').should('contain.text', 'akinolavictoria21@gmail.com');
        cy.get('#output #currentAddress').should('contain.text', 'Omole Phase 2 Estate');
        cy.get('#output #permanentAddress').should('contain.text', 'Ikeja, Lagos'); 
        
    })

    //Checkboxes
    it('should check multiple checkboxes and verify output', () => {
        cy.contains('Elements').click();
        cy.contains('Check Box').click();
        cy.get('.rc-tree-switcher').click();
        cy.get(':nth-child(2) > .rc-tree-checkbox').click();
        cy.get(':nth-child(3) > .rc-tree-checkbox').click();
        cy.get(':nth-child(4) > .rc-tree-checkbox').click();

        cy.get('#result')
         .should('contain.text', 'home')
         .and('contain.text', 'desktop')
         .and('contain.text', 'documents')
         .and('contain.text', 'downloads');

    })
    it('should select Yes and Impressive radio buttons and verify output', () => {
        cy.contains('Elements').click();
        cy.contains('Radio Button').click();
        cy.get(':nth-child(1) > [name="like"]').click();
        cy.get('.text-success').should('contain.text', 'Yes');

        cy.get(':nth-child(2) > [name="like"]').click();
        cy.get('.text-success').should('contain.text', 'Impressive');

    })

    //Web Tables
    it('should add, edit, and delete a record in Web Tables', () => {
        cy.contains('Elements').click();
        cy.contains('Web Tables').click();
        
        //Test Input Data
        const firstName = 'Victoria';
        const lastName = 'Akinola';
        const email = 'akinolavictoria21@gmail.com';
        const age = '24';
        const salary = '500000';
        const department = 'QA';

        //Add a New Record
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#userEmail').type(email);
        cy.get('#age').type(age);
        cy.get('#salary').type(salary);
        cy.get('#department').type(department);
        cy.get('#submit').click();
    
        //Verify the new record appaears in the table
        cy.get('.web-tables-wrapper').should('contain.text', firstName)
                        .and('contain.text', lastName)
                        .and('contain.text', email)
                        .and('contain.text', age)
                        .and('contain.text', salary)
                        .and('contain.text', department);

         //Edit the Record
         cy.get('#edit-record-4 >').click();
             const newDepartment = 'Automation';
        cy.get('#department').clear().type(newDepartment);
        cy.get('#submit').click();

        //Verify the Edited Record
        cy.get(':nth-child(4) > :nth-child(6').should('contain.text', newDepartment);

        //Delete the Record
        cy.get('#delete-record-4').click();
                    
    })

    //Buttons
    it.only('should verify double click, right click and dynamic click buttons', () => {
        cy.contains('Elements').click();
        cy.contains('Buttons').click();
    
    // Double Click Action   
        const doubleClickMessage = 'You have done a double click';
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('contain.text', doubleClickMessage);

    //Right Click Action
       const rightClickMessage = 'You have done a right click';
       cy.get('#rightClickBtn').rightclick();
       cy.get('#rightClickMessage').should('contain.text', rightClickMessage);

    //Dynamic Click Action
        const dynamicClickMessage = 'You have done a dynamic click';
        cy.contains('^Click Me$').click();    
    })

}); 