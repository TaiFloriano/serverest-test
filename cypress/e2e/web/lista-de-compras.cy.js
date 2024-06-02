/// <reference types="cypress" />

describe ('Funcionalidade: Lista de compras', () => {

 
    beforeEach(() => {
       cy.login('taitest1717208775661@qa.com', 'teste')
      });

      it('Validar entrada na lista de produtos', () => {
        cy.visit('minhaListaDeProdutos')
        cy.get('h1').should('contain', 'Lista de Compras')
        cy.url().should('contain', 'minhaListaDeProdutos')     
      
      });
      
    });