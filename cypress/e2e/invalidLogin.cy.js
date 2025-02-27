describe('Invalid Login Attempt', () => {
    beforeEach(function () {
      cy.fixture('userData').as('userData');
    });
  
    it('checks error handling for invalid credentials', function () {
      cy.visit('https://automationexercise.com/login');
  
      const invalidUser = this.userData.invalid_user;
  
      // Attempt login
      cy.get('input[data-qa="login-email"]').type(invalidUser.email);
      cy.get('input[data-qa="login-password"]').type(invalidUser.password);
      cy.get('button[data-qa="login-button"]').click();
  
      // Verify 
      cy.contains('Your email or password is incorrect!').should('be.visible');
    });
  });
  