describe('Add Item to Cart', () => {
    beforeEach(function () {
      cy.fixture('productData').as('product');
    });
  
    it('adds a product to the cart', function () {
      cy.addToCart(this.product.name);
    
      // Verify correct item
      cy.get('a[href="/view_cart"]').first().click();
      cy.contains('.cart_description', this.product.name).should('be.visible');
    });
  });
  