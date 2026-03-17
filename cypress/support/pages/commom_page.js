/// <reference types="cypress" />

export default {
  acessarCadastroUsurario() {
    cy.visit('/')
      .get('#top_header')
      .should('be.visible')

    cy.get('.fa-lock')
      .click()
    
    cy.visit('/register')

    cy.url().should('include', '/register')
  }
}