// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Register a new user
Cypress.Commands.add('registerUser', (user, email) => {
    cy.visit('https://automationexercise.com/login');
  
    // Initial signup info
    cy.get('input[data-qa="signup-name"]').type(user.name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
    
    // TItle and password
    cy.get('#id_gender1').check();
    cy.get('input[data-qa="password"]').type(user.password);
  
    // DOB and newsletter for fun
    cy.get('select[data-qa="days"]').select(user.dob.day);
    cy.get('select[data-qa="months"]').select(user.dob.month);
    cy.get('select[data-qa="years"]').select(user.dob.year);
  
    cy.get('#newsletter').check();
  
    // Address info
    cy.get('input[data-qa="first_name"]').type(user.address.first_name);
    cy.get('input[data-qa="last_name"]').type(user.address.last_name);
    cy.get('input[data-qa="company"]').type(user.address.company);
    cy.get('input[data-qa="address"]').type(user.address.street);
    cy.get('input[data-qa="address2"]').type(user.address.address2);
    cy.get('select[data-qa="country"]').select(user.address.country);
    cy.get('input[data-qa="state"]').type(user.address.state);
    cy.get('input[data-qa="city"]').type(user.address.city);
    cy.get('input[data-qa="zipcode"]').type(user.address.zipcode);
    cy.get('input[data-qa="mobile_number"]').type(user.address.mobile);
  
    // Signup and verify
    cy.get('button[data-qa="create-account"]').click();
    cy.url().should('include', '/account_created');
  
    // Save email for login reuse
    cy.writeFile('cypress/fixtures/tempData.json', { email });
  });

// Log in
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://automationexercise.com/login');

    // Enter credentials
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();

    // Verify
    cy.contains('Logout').should('be.visible');
  });

// Add product to cart
Cypress.Commands.add('addToCart', (productName) => {
    cy.visit('https://automationexercise.com');

    // Find product
    cy.get('a[href="/products"]').click();
    cy.get('#search_product').type(`${productName}`);
    cy.get('#submit_search').click()

    // Add to cart =
    cy.get('.add-to-cart').first().click()

    // Verify
    cy.contains('Added').should('be.visible');
    cy.get('button.close-modal').click();
  });

// Checkout 
Cypress.Commands.add('checkout', () => {
    cy.get('a[href="/view_cart"]').first().click();
    cy.get('a.check_out').click();
    cy.get('textarea[name="message"]').type('Please leave packages by the garage.');
    cy.get('a[href="/payment"]').click();
});