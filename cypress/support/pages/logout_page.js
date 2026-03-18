/// <reference types="cypress" />

export default {

  selecionarOpcaoLogout() {
    cy.get('#userLogged')
      .trigger('mouseover')
    
    cy.contains('Logout')
      .click({ force: true })
  },

  validarMensagemLogoutSucesso() {
    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Logout realizado')
    
    cy.get('#swal2-html-container')
      .should('be.visible')
      .should('have.text', 'Obrigado, e volte sempre!')
  },

  confirmarLogout() {
    cy.get('.swal2-confirm')
      .click()
  }

}