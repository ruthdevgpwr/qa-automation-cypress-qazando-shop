/// <reference types="cypress" />

export default {
  clicarCadastrar() {
    cy.get('#btnRegister')
      .click()
  }
}