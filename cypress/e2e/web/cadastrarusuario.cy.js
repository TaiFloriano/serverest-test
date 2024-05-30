/// <reference types="cypress" />
import dadosUsuarios from '../../fixtures/usuarios.json'

describe('Funcionalidade: Cadastro', () => {

   beforeEach (() => {
     cy.visit('cadastrarusuarios')
  });

   it('Deve fazer o cadastro com sucesso', () =>{
      cy.get('[data-testid="nome"]', ).clear().type('TaianaTeste1')
      cy.get('[data-testid="email"]').clear().type('TaianaTeste12@qa.com')
      cy.get('[data-testid="password"]').clear().type('teste')
      cy.get('[data-testid="checkbox"]').check()
      cy.get('[data-testid="cadastrar"]').click()
      cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
  });

   // it('Deve fazer o cadastro com sucesso sem admin', () =>{
  //    cy.get('[data-testid="nome"]', ).clear().type('TaianaTeste1')
  //    cy.get('[data-testid="email"]').clear().type('TaianaTeste12@qa.com')
  //    cy.get('[data-testid="password"]').clear().type('teste')
  //    cy.get('[data-testid="cadastrar"]').click()
  //    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
  //});

  //it('Deve validar nome obrigatório', () =>{
  //  cy.get('[data-testid="nome"]', ).clear() 
  //  cy.get('[data-testid="email"]').clear().type('TaianaTeste11.1@qa.com')
  //  cy.get('[data-testid="password"]').clear().type('teste')
  //  cy.get('[data-testid="checkbox"]').check()
  //  cy.get('[data-testid="cadastrar"]').click()
  //  cy.get('.alert').should('contain', 'Nome é obrigatório')
  //});

  //it('Deve validar que o email já está em uso', () =>{
  //  cy.get('[data-testid="nome"]', ).clear().type('TaianaTeste1')
  //  cy.get('[data-testid="email"]').clear().type('TaianaTeste12@qa.com')
  //  cy.get('[data-testid="password"]').clear().type('teste')
  //  cy.get('[data-testid="checkbox"]').check()
  //  cy.get('[data-testid="cadastrar"]').click()
  //  cy.get('.alert').should('contain', 'Este email já está sendo usado')
  //});


  it('Cadastrar usuário com sucesso usando importação de dados', () => {
    cy.get('[data-testid="nome"]',).clear().type(dadosUsuarios[0].nome)
    cy.get('[data-testid="email"]').clear().type(dadosUsuarios[0].email)
    cy.get('[data-testid="password"]').clear().type(dadosUsuarios[0].senha)
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
  });

});