describe('Demo QA Widgets', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/')
  })

  it('verifies autocomplete selection and removal', () => {
    cy.contains('Widgets').click()
    cy.contains('Auto Complete').click()

    const colors = ['Red', 'Green', 'Blue']

    // Select colors
    colors.forEach(color => {
      cy.get('#autoCompleteMultipleInput')
        .type(color)
        .type('{enter}')
    })

    // Verify all colors appear
    colors.forEach(color => {
      cy.get('.auto-complete__multi-value__label')
        .should('contain', color)
    })

    // Remove one color
    cy.contains('.auto-complete__multi-value', 'Green')
      .find('.auto-complete__multi-value__remove')
      .click()

    // Verify removal
    cy.get('.auto-complete__multi-value__label')
      .should('not.contain', 'Green')

  })
    
  it('should select a specific date correctly', () => {
    cy.contains('Widgets').click()
    cy.contains('Date Picker').click()

    cy.get('#datePickerMonthYearInput').click()
    cy.get('.react-datepicker__month-select').select('March')
    cy.get('.react-datepicker__year-select').select('2025')
     cy.get('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click()

    // Verify
    cy.get('#datePickerMonthYearInput')
      .should('have.value', '03/15/2025')

    cy.get('#dateAndTimePickerInput').click()
    cy.contains('.react-datepicker__day', '20').click()
    cy.contains('.react-datepicker__time-list-item', '10:30').click()

  // Verify time appears
  cy.get('#dateAndTimePickerInput').should('contain.value', '10:30')
 })

})