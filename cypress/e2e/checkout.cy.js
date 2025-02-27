describe('Checkout Process', () => {
    beforeEach(function () {
      cy.fixture('tempData').as('tempData');
      cy.fixture('userData').as('userData');
      cy.fixture('productData').as('product');
    });
  
    it('proceeds to checkout and verifies successful order', function () {
      cy.readFile('cypress/fixtures/tempData.json').then((data) => {
        const user = this.userData.users[0];
        
        // Full checkout flow
        cy.login(data.email, user.password);
        cy.addToCart(this.product.name);
        cy.checkout();
  
        // Enter payment details
        cy.get('input[data-qa="name-on-card"]').type(user.payment.card_name);
        cy.get('input[data-qa="card-number"]').type(user.payment.card_number);
        cy.get('input[data-qa="cvc"]').type(user.payment.cvc);
        cy.get('input[data-qa="expiry-month"]').type(user.payment.expiry_month);
        cy.get('input[data-qa="expiry-year"]').type(user.payment.expiry_year);

        // Submit order and verify
        cy.get('button[data-qa="pay-button"]').click();
        cy.contains('Order Placed!').should('be.visible');
      });
    });
  });
  