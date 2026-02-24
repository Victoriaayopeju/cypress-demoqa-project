Cypress.Commands.add('fillTextBox', (data) => {
  cy.get('#userName').clear().type(data.name)
  cy.get('#userEmail').clear().type(data.email)
  cy.get('#currentAddress').clear().type(data.currentAddress)
  cy.get('#permanentAddress').clear().type(data.permanentAddress)
  cy.get('#submit').click()
})


Cypress.Commands.add('fillPracticeForm', (data) => {

  // Basic fields
  cy.get('#firstName').clear().type(data.firstName)
  cy.get('#lastName').clear().type(data.lastName)
  cy.get('#userEmail').clear().type(data.email)

  // Gender
  cy.contains('label', data.gender).click()

  // Mobile number
  cy.get('#userNumber').clear().type(data.mobile)

  // Date of Birth
  cy.get('#dateOfBirthInput').click()
  cy.get('.react-datepicker__month-select').select(data.month)
  cy.get('.react-datepicker__year-select').select(data.year)
  cy.contains('.react-datepicker__day', data.day).click()

  // Subjects (autocomplete)
  data.subjects.forEach(subject => {
    cy.get('#subjectsInput').type(subject + '{enter}')
  })

  // Hobbies (checkboxes)
  data.hobbies.forEach(hobby => {
    cy.contains('label', hobby).click()
  })

  // Upload Picture
  cy.get('#uploadPicture').selectFile(data.picture)

  // Current Address
  cy.get('#currentAddress').clear().type(data.address)

  // State and City
  cy.get('#state').click().contains(data.state).click()
  cy.get('#city').click().contains(data.city).click()

  // Submit
  cy.get('#submit').click()

})