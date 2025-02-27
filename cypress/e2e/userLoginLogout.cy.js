describe('User Login & Logout', () => {
    beforeEach(function () {
      cy.fixture('tempData').as('tempData');
      cy.fixture('userData').as('users');
    });
  
    it('logs in and logs out successfully', function () {
      cy.readFile('cypress/fixtures/tempData.json').then((data) => {
        const user = this.users.users[0];
  
        cy.login(data.email, user.password);
        
        // Logout and verify
        cy.get('a[href="/logout"]').click();
        cy.url().should('include', '/login');
      });
    });
  });
  