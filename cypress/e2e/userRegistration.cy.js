describe('User Registration', () => {
  beforeEach(function () {
    cy.fixture('userData').as('users');
  });

  it('registers a new user successfully', function () {
    // Get username and generate unique email
    const user = this.users.users[0];
    const email = `user_${Date.now()}@gmail.com`;
    
    // Login flow
    cy.registerUser(user, email);
  });
});
