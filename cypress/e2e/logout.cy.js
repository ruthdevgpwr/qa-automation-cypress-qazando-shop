/// <reference types="cypress" />

import { user } from "../support/factories/userFactory"
import commom_page from "../support/pages/commom_page"
import login_page from "../support/pages/login_page"
import logout_page from "../support/pages/logout_page"

describe('Logout', () => {

  beforeEach('Deve acessar o sistema logado', () => {

    commom_page.acessarLoginUsuario()
    login_page.preencherEmail(user.dadosValidos.email)
    login_page.preencherSenha(user.dadosValidos.senha)
    login_page.clicarLogin()
    login_page.validarMensagemSucessoLogin(user.dadosValidos.email)
    cy.get('.swal2-confirm').click()
    cy.url().should('include', '/my-account')
  })
  
  it('Deve realizar logout com sucesso', () => {

    logout_page.selecionarOpcaoLogout()
    logout_page.validarMensagemLogoutSucesso()
    logout_page.confirmarLogout()
    
    cy.url().should('include', '/login#!')
  })
})