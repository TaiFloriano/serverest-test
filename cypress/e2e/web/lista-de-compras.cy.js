/// <reference types="cypress" />

describe ('Funcionalidade: Lista de compras', () => {

 
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').clear().type ('fulano@qa.com')
        cy.get('[data-testid="senha"]').clear().type ('teste')
        cy.get('[data-testid="entrar"]').click()
        cy.wait(10000)
      });

      it ('Validar ')
      
    });