/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    // Fazer algo antes de cada cenário de testes
    //Não estou usando mais, pois estou usando o método customizado
    //beforeEach(() => {
    //    cy.visit('login')
   // });

    // Fazer algo depois de cada cenário de testes
    //afterEach(() => {
     //   cy.screenshot()
    //});


    it('Deve validar email e senha nulos', () => {
        cy.get('[data-testid="email"]').clear()
        cy.get('[data-testid="senha"]').clear()
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Email é obrigatório')
        cy.get('.alert').should('contain', 'Password é obrigatório')
    });

    it('Deve validar email inválido', () => {
        cy.get('[data-testid="email"]').clear().type('fulanoqa.com')
        cy.get('[data-testid="senha"]').clear().type('teste')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Inclua um "@" no endereço de e-mail') 
    });

    it('Deve validar email inválido', () => {
        cy.login('emailincorreto@qa.com', 'teste')
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    });

    it('Deve validar senha inválida', () => {
        cy.login('Orlo.West66@gmail.com', 'test')
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    });


    it('Deve fazer login com sucesso', () => {
        cy.login('taitest1717208775661@qa.com', 'teste')
        //cy.get('[data-testid="email"]').clear().type('taitest1717208775661@qa.com')
       //cy.get('[data-testid="senha"]').clear().type('teste')
        //cy.get('[data-testid="entrar"]').click()
        cy.get('h1').should('contain', 'Bem Vindo')
        cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.')

    });


    it.skip('Deve fazer login com sucesso usando fixture', () => {
        cy.fixture('login').then((dadoslogin) => {
            cy.login(dadoslogin.email, dadoslogin.senha)
        })
        cy.get('h1').should('contain', 'Bem Vindo')
    });

});
