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

  it('card should be displayed when i click on button, then button is disabled. ', () => {
    // Test visite appli
    cy.visit('/');

    // Test button inerte
    cy.get('app-button').should('not.be.disabled');

    // Test click button
    cy.get('app-button').click();

    // test carte Visible
    cy.get('app-card').should('be.visible');

    // Test patiente 10 secondes.
    cy.wait(10000);

    // Test button inerte
    cy.get('app-button').should('not.be.disabled');
  });
});
