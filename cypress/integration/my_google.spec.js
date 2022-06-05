/// <reference types="cypress" />

const HEADER = 'header';

describe('My Google', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/base_answer/')
  });

  describe('1 - Testando </ header>', () => {
    it('Crie um </ header>', () => {
      cy.get(HEADER).should('exist');
    });
  });
});
