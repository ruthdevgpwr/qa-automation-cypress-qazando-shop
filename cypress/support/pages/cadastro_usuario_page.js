/// <reference types="cypress" />

export default {
  clicarCadastrar() {
    cy.get('#btnRegister')
      .click()
  },

  validarMensagemErro(mensagem) {
    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', mensagem)
  },
}
