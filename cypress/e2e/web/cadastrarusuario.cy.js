/// <reference types="cypress" />
import dadosUsuarios from '../../fixtures/usuarios.json'
import { faker } from '@faker-js/faker';


describe('Funcionalidade: Cadastro', () => {

  beforeEach(() => {
    cy.visit('cadastrarusuarios')
  });

  //skip é para pular o cenário
  it('Deve fazer o cadastro com sucesso (usando método Date Now)', () => {
    var email = 'taitest' + Date.now() + '@qa.com' //Date.now vai gerar nº e o + vai cocatenar
    cy.get('[data-testid="nome"]',).clear().type('TaianaTeste1')
    cy.get('[data-testid="email"]').clear().type(email)
    cy.get('[data-testid="password"]').clear().type('teste')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
  });

  it('Deve fazer o cadastro com sucesso (usando biblioteca Faker)', () => {
    cy.get('[data-testid="nome"]',).clear().type(faker.person.fullName({ firstName: 'Taiana'}))
    cy.get('[data-testid="email"]').clear().type(faker.internet.email({ firstName: 'Taiana'}))
    cy.get('[data-testid="password"]').clear().type('teste')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
  });

  it('Deve fazer o cadastro com sucesso sem admin', () => {
    cy.get('[data-testid="nome"]',).clear().type('TaianaTeste1')
    cy.get('[data-testid="email"]').clear().type('TaianaTeste12@qa.com')
    cy.get('[data-testid="password"]').clear().type('teste')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
  });

  it('Deve fazer o cadastro com sucesso sem admin (usando comando customizado e Faker)', () => {
    cy.cadastroUsuarioComum ('TaianaTeste1', faker.internet.email({ firstName: 'Taiana'}), 'teste')
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
    cy.get('h1').should('contain', 'Serverest Store')
  });

  it('Deve fazer o cadastro com sucesso admin (usando comando customizado e Faker)', () => {
    cy.cadastroUsuarioAdmin ('TaianaTeste1', faker.internet.email({ firstName: 'Taiana'}), 'teste')
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
    cy.get('.lead', {timeout: 10000}).should('contain', 'Este é seu sistema para administrar seu ecommerce.')
  });

  it('Deve validar nome obrigatório', () => {
    cy.get('[data-testid="nome"]').clear()
    cy.get('[data-testid="email"]').clear().type('TaianaTeste11.1@qa.com')
    cy.get('[data-testid="password"]').clear().type('teste')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('contain', 'Nome é obrigatório')
  });

  it('Deve validar que o email já está em uso', () => {
    cy.get('[data-testid="nome"]',).clear().type('TaianaTeste1')
    cy.get('[data-testid="email"]').clear().type('TaianaTeste12@qa.com')
    cy.get('[data-testid="password"]').clear().type('teste')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('contain', 'Este email já está sendo usado')
  });


  it('Cadastrar usuário com sucesso usando importação de dados', () => {
    cy.get('[data-testid="nome"]',).clear().type(dadosUsuarios[0].nome)
    cy.get('[data-testid="email"]').clear().type(dadosUsuarios[0].email)
    cy.get('[data-testid="password"]').clear().type(dadosUsuarios[0].senha)
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
  });

});