describe('Homepage', () => {
    it('displays the user location and fetches restaurants', () => {
      cy.visit('/');
  
      // Wait for location to be fetched
      cy.get('input').should('have.value', /.+,.+/);
  
      // Click Find Restaurants and check for grid display
      cy.contains('Find Restaurants').click();
      cy.get('.grid').should('be.visible');
      cy.get('.grid .p-card').should('have.length', 3);
    });
  });
  