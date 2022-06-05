/// <reference types="cypress" />

const HEADER = 'header';
const MAIN = 'main';
const MAIN_SECTION = 'main section';

describe('My Google', () => {
  beforeEach(() => {
    cy.visit('../../base_answer/')
  });

  describe('1 - Testando </ header>', () => {
    it('Crie um </ header>', () => {
      cy.get(HEADER).should('exist');
    });

    it('O </ header> deve possuir 4 elementos', () => {
      cy.get(HEADER).children().should('have.length', 4);
    });
  });

  describe('2 - Testando o </ main>', () => {
    it('Crie um </main>', () => {
      cy.get(MAIN).should('exist');
    });

    it('O </ main> deve possuir 3 elementos', () => {
      cy.get(MAIN).children().should('have.length', 3);
    });

    it('O </ main> deve possuir uma </ section>', () => {
      cy.get(MAIN_SECTION).should('exist');
    });

    it('A </ section> deve possuir dois elementos', () => {
      cy.get(MAIN_SECTION).children().should('have.length', 2);
    });
  });
});
