/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    // Fazer algo antes de cada cenário de testes
    beforeEach(() => {
        cy.visit('login')
    });

    // Fazer algo depois de cada cenário de testes
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('[data-testid="email"]').clear().type('Orlo.West66@gmail.com')
        cy.get('[data-testid="senha"]').clear().type('teste')
        cy.get('[data-testid="entrar"]').click()
        cy.get('h1').should('contain', 'Bem Vindo')
        cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.')

    });

    it('Deve validar email inválido', () => {
        cy.get('[data-testid="email"]').clear().type('emailincorreto@qa.com')
        cy.get('[data-testid="senha"]').clear().type('teste')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    });

    it('Deve validar senha inválida', () => {
        cy.get('[data-testid="email"]').clear().type('Orlo.West66@gmail.com')
        cy.get('[data-testid="senha"]').clear().type('test')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    });

    it('Deve fazer login com sucesso usando fixture', () => {
        cy.fixture('login').then((dadoslogin) => {
            cy.login(dadoslogin.email, dadoslogin.senha)
        })
        cy.get('h1').should('contain', 'Bem Vindo')
    });

    it('Deve validar email e senha nulos', () => {
        cy.get('[data-testid="email"]').clear().type(' ')
        cy.get('[data-testid="senha"]').clear().type(' ')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Email é obrigatório')
    });

    it('Deve validar email inválido', () => {
        cy.get('[data-testid="email"]').clear().type('fulanoqa.com')
        cy.get('[data-testid="senha"]').clear().type('teste')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Por favor, insira um e-mail válido') //Ver essa msg com Fábio
    });

});
