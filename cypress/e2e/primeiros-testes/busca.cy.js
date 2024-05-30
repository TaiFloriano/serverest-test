/// <reference types="cypress" />

describe('Buscar no google', () => {
    it('Deve buscar com sucesso uma palavra chave', () => {
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('Automação de testes')
        //cy.get('.FPdoLc > center > .gNO89b').click() 
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
        cy.get('#rso').should('contain', 'Automação de testes')
    });
    
});