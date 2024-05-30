/// <reference types="cypress" />
import dados from '../../fixtures/usuario-api.json'
const urlBase = 'http://localhost:3000/'

describe('API - Produtos', () => {

    beforeEach(() => {
        cy.token(dados.email, dados.senha).as(token)
    })

    it('Deve listar produtos com sucesso', () => {
        cy.request({
            method: 'GET',
                url: urlBase + 'produtos'
        }).then((response) => {
            expect(response.status).to.equal(200)
            //expect(response.duration).lessThan(40)
            expect(response.body).to.have.property('produtos')
            expect(response.body).to.have.property('quantidade')
        })
    });
    
it.only('Deve cadastrar um produto com sucesso', function () {
    var produto = `Produto teste ${Date.now()}`
    cy.request({
        method: 'POST',
        url: urlBase + 'produtos',
        body: {
            "nome": produto,
            "preco": 50,
            "descricao": "fone",
            "quantidade": 100
          },
          headers: {
            authorization: this.token
          }
    }).then((response) =>{
        expect(response.status).to.equal(201)
        expect(response.body.message).to.equal('Cadastro realizado com sucesso')
    })
});

it('Deve alterar dados do produto com sucesso', function () {
    cy.request({
        method: 'PUT',   
        url: urlBase + 'produtos' + 'BeeJh5lz3k6kSIzA',
        body: {
            "nome": teste,
            "preco": 50,
            "descricao": "fone",
            "quantidade": 100
          },
        headers: {
          authorization: this.token
        }
     }).then((response) =>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Registro alterado com sucesso')
    })
});

it('Deve excluir o produto com sucsso', function() {
    cy.request({
        method: 'DELETE',
        url: urlBase + 'produtos' + 'BeeJh5lz3k6kSIzA',
        headers: {
            authorization: this.token
          }
    })
});

});