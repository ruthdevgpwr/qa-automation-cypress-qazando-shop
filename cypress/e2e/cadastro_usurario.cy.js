/// <reference types="cypress" />

import { user } from '../support/factories/userFactory'

describe('Cadastro de usuário', () => {

  beforeEach(('Acessar tela de cadastro de usuário'), () => {

    cy.visit('/')
      .get('#top_header')
      .should('be.visible')
    
    cy.get('.fa-lock')
      .click()

    cy.visit('/register')

    cy.url().should('include', '/register')

  })
  it('Cadastro com sucesso', () => {

    cy.get('#user')
      .type(user.dadosValidos.name)
      .should('have.value', user.dadosValidos.name)
    
    cy.get('#email')
      .type(user.dadosValidos.email)
      .should('have.value', user.dadosValidos.email)
    
    cy.get('#password')
      .type(user.dadosValidos.senha)
      .should('have.value', user.dadosValidos.senha)
    
    cy.get('#btnRegister')
      .click()

    cy.url().should('include', '/my-account')

    cy.get('.swal2-title')
      .should('be.visible')
      .should('have.text', 'Cadastro realizado!')

    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('have.text', `Bem-vindo ${user.dadosValidos.name}`)
  })

  it('Cadastro sem nome de usuário', () => {

    cy.get('#email')
      .type(user.dadosValidos.email)

    cy.get('#password')
      .type(user.dadosValidos.senha)
    
    cy.get('#btnRegister')
      .click()
    
    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo nome deve ser prenchido')
  })

  it('Cadastro informando email inválido', () => {

    cy.get('#user')
      .type(user.dadosValidos.name)

    cy.get('#email')
      .type(user.dadosInvalidos.emailInvalido)

    cy.get('#password')
      .type(user.dadosValidos.senha)
    
    cy.get('#btnRegister')
      .click()
    
    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
  })  

  it('Cadastro sem informar email', () => {

    cy.get('#user')
      .type(user.dadosValidos.name)

    cy.get('#password')
      .type(user.dadosValidos.senha)

    cy.get('#btnRegister')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
  }) 

  it('Cadastro com todos os campos vazios', () => {

    cy.get('#btnRegister')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo nome deve ser prenchido')
  })

  it('Cadastro sem informar senha', () => {

    cy.get('#user')
      .type(user.dadosValidos.name)
    
    cy.get('#email')
      .type(user.dadosValidos.email)
    
    cy.get('#btnRegister')
      .click()
    
    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Cadastro com senha inválida', () => {

    cy.get('#user')
      .type(user.dadosValidos.name)
    
    cy.get('#email')
      .type(user.dadosValidos.email)

    cy.get('#password')
      .type(user.dadosInvalidos.senhaInvalida)
    
    cy.get('#btnRegister')
      .click()
    
    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

  })

  it('Cadastro informando e-amail com letras maiúsculas', () => {

    cy.get('#user')
      .type(user.dadosValidos.name)
    
    cy.get('#email')
      .type(user.dadosValidos.email.toUpperCase())

    cy.get('#password')
      .type(user.dadosValidos.senha)
    
    cy.get('#btnRegister')
      .click()
    
    cy.url().should('include', '/my-account')

    cy.get('.swal2-title')
      .should('be.visible')
      .should('have.text', 'Cadastro realizado!')
      
    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('have.text', `Bem-vindo ${user.dadosValidos.name}`) 

  })


})
