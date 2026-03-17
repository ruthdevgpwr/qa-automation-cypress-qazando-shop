/// <reference types="cypress" />

import { user } from '../support/factories/userFactory'
import commom_page from '../support/pages/commom_page'

describe('Login', () => {

  beforeEach(('Acessar página de Login de Usuário'), () => {

    commom_page.acessarLoginUsuario()

  })
  it('Login com sucesso', () => {

    cy.get('#user')
      .type(user.dadosValidos.email)
    
    cy.get('#password')
      .type(user.dadosValidos.senha)
    
    cy.get('#btnLogin')
      .click()
    
    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Login realizado')
    
    cy.get('#swal2-html-container')
      .should('be.visible')
      .should('have.text', `Olá, ${user.dadosValidos.email}`)
  })  
})
