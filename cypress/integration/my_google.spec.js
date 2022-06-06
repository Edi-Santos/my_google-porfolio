/// <reference types="cypress" />

const HEADER = 'header';
const MAIN = 'main';
const MAIN_SECTION = 'main section';
const FOOTER = 'footer';
const FOOTER_SECTION = 'footer section';
const FOOTER_LINKS = `${FOOTER_SECTION} div.footer-links`;
const LINKS_FOR_GOOGLE = '#links-for-google'
const LINKS_FOR_YOU = '#links-for-you'

describe('My Google', () => {
  beforeEach(() => {
    cy.visit('./index.html')
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

  describe('3 - Testando </ footer>', () => {
    it('Crie um </ footer>', () => {
      cy.get(FOOTER).should('exist');
    });

    it('O </ footer> deve possuir 1 elemento', () => {
      cy.get(FOOTER).children().should('have.length', 1);
    });

    it('O </ footer> deve possuir uma </ section>', () => {
      cy.get(FOOTER_SECTION).should('exist');
    });

    it('A </ section> deve possuir 2 elementos', () => {
      cy.get(FOOTER_SECTION).children().should('have.length', 2);
    });

    it('O segundo elemento da </ section> deve possuir 2 elementos (este elemento deve possuir a classe "footer-links"', () => {
      cy.get(FOOTER_LINKS).children().should('have.length', 2);
    });

    it('O primeiro elemento do filho do elemento com a classe "footer-links" deve possuir o atributo id="links-for-google" e 4 elementos', () => {
        cy.get(LINKS_FOR_GOOGLE).children().should('have.length', 4);
    });

    it('O segundo elemento do filho do elemento com a classe "footer-links" deve possuir o atributo id="links-for-you" e 3 elementos', () => {
      cy.get(LINKS_FOR_YOU).children().should('have.length', 3);
    });
  });
});
