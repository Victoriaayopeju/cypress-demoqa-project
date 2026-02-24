/// <reference types="cypress" />

describe('SECTION 6: API TESTING - Demo QA BookStore', () => {
  const baseUrl = 'https://demoqa.com';
  const singleBookISBN = '9781449325862'; // Example ISBN

  // 6.1 Get All Books
  it('6.1 - should get all books and verify details', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/BookStore/v1/Books`,
      failOnStatusCode: false
    }).then((response) => {
      // Verify response status
      expect(response.status).to.eq(200);

      // Verify response contains books
      expect(response.body).to.have.property('books').and.to.be.an('array').and.to.have.length.greaterThan(0);

      // Verify each book has required fields
      response.body.books.forEach((book) => {
        expect(book).to.have.property('isbn').and.to.be.a('string');
        expect(book).to.have.property('title').and.to.be.a('string');
        expect(book).to.have.property('author').and.to.be.a('string');
        expect(book).to.have.property('publisher').and.to.be.a('string');
      });
    });
  });

  // 6.2 Get Single Book
  it('6.2 - should get a single book by ISBN and verify details', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/BookStore/v1/Book?ISBN=${singleBookISBN}`,
      failOnStatusCode: false
    }).then((response) => {
      // Verify status
      expect(response.status).to.eq(200);

      // Verify book details
      expect(response.body).to.have.property('isbn', singleBookISBN);
      expect(response.body).to.have.property('title').and.to.be.a('string');
      expect(response.body).to.have.property('author').and.to.be.a('string');
      expect(response.body).to.have.property('publisher').and.to.be.a('string');
    });
  });

  // 6.3 Create User
  it('6.3 - should create a new user and verify', () => {
    const userData = {
      userName: `user_${Math.floor(Math.random() * 10000)}`,
      password: 'Test@1234'
    };

    cy.request({
      method: 'POST',
      url: `${baseUrl}/Account/v1/User`,
      headers: { 'Content-Type': 'application/json' },
      body: userData,
      failOnStatusCode: false
    }).then((response) => {
      // Verify status
      expect(response.status).to.eq(201);

      // Verify username and userID
      expect(response.body).to.have.property('username', userData.userName);
      expect(response.body).to.have.property('userID').and.to.be.a('string');
    });
  });
});