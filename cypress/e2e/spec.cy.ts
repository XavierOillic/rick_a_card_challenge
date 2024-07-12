describe('rick-a-card', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display this button title :', () => {
    cy.contains('CLICK TO PLAY : DISPLAY A CARD!').should('be.visible');
  });

  it('Should display a countdown', () => {
    cy.clock;
  });

  it('Button should be unabled', () => {
    cy.visit('/');
    cy.get('app-button').click();
  });

  it('card should be displayed when i click on button', () => {
    cy.visit('/');
    cy.get('app-button').click();
    cy.get('app-card').get('.card').should('not.be.visible');
  });
});
