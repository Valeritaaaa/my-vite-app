describe('Movies', () => {
 /* it('should display the correct total cards', () => {
    cy.visit("/home");
    cy.location("pathname").should("eq", "/home");
    cy.get("[data-cy=MovieCard]").should("have.length", 10);
  });*/

  it('should display the correct title', () => {
    cy.visit("/movies");
    cy.location("pathname").should("eq", "/movies");
    cy.get("[data-cy=movie-list-title]").should("have.text", "Disney Movies ✨");
  });
});