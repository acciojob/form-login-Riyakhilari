describe('Form Submission', () => {
  it('should allow a user to input their first and last name and submit the form', () => {
    cy.visit('/'); 

    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('John Doe');
    });
  });

  it('should allow a user to input their first, middle and last name and submit the form', () => {
    cy.visit('/'); 

    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Mark Doe'); 
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('John Mark Doe');
    });
  });
});