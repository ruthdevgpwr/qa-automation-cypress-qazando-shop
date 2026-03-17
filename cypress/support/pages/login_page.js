/// <reference types="cypress" />

export default {

  preencherEmail(email) {
    cy.get('#user')
      .type(email)
  },

  preencherSenha(password) {
    cy.get('#password')
      .type(password)
  },

  clicarLogin() {
    cy.get('#btnLogin')
      .click()
  },

  validarMensagemSucessoLogin(email) {

    cy.get('#swal2-title')
          .should('be.visible')
          .should('have.text', 'Login realizado')
        
    cy.get('#swal2-html-container')
      .should('be.visible')
      .should('have.text', `Olá, ${email}`)
  }
}