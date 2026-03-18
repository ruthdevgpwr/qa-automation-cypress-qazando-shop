/// <reference types="cypress" />

export default {
  clicarCadastrar() {
    cy.get('#btnRegister')
      .click()
  },

  preencherNome(name) {
    cy.get('#user')
      .type(name)
      .should('have.value', name)
  },

  preencherEmail(email) {
    cy.get('#email')
      .type(email)
      .should('have.value', email)
  },

  preencherSenha(password) {
    cy.get('#password')
        .type(password)
        .should('have.value', password)
  },

  validarMensagemErro(mensagem) {
    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', mensagem)
  },

  validarMensagemCadastroSucesso(name){
    cy.get('.swal2-title')
          .should('be.visible')
          .should('have.text', 'Cadastro realizado!')
    
    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('have.text', `Bem-vindo ${name}`)
  }
}
