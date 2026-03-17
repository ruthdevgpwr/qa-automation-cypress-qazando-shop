/// <reference types="cypress" />

import { user } from '../support/factories/userFactory'
import commom_page from '../support/pages/commom_page'
import login_page from '../support/pages/login_page'

describe('Login', () => {

  beforeEach(('Acessar página de Login de Usuário'), () => {

    commom_page.acessarLoginUsuario()

  })
  it('Login com sucesso', () => {

    login_page.preencherEmail(user.dadosValidos.email)
    login_page.preencherSenha(user.dadosValidos.senha)
    login_page.clicarLogin()
    login_page.validarMensagemSucessoLogin(user.dadosValidos.email)
  })
  
  it('Login com todos os campos vazios', () => {
    login_page.clicarLogin()
    login_page.validarMensagemErro('E-mail inválido.')
  })

  it('Login sem informar e-mail', () => {
    login_page.preencherSenha(user.dadosValidos.senha)
    login_page.clicarLogin()
    login_page.validarMensagemErro('E-mail inválido.')
  })

  it('Login sem informar senha', () => {
    login_page.preencherEmail(user.dadosValidos.email)
    login_page.clicarLogin()
    login_page.validarMensagemErro('Senha inválida.')
  })

  it('Login informando e-mail inválido', () => {
    login_page.preencherEmail(user.dadosInvalidos.emailInvalido)
    login_page.preencherSenha(user.dadosValidos.senha)
    login_page.clicarLogin()
    login_page.validarMensagemErro('E-mail inválido.')
  })

  it('Login informando senha inválida', () => {
    login_page.preencherEmail(user.dadosValidos.email)
    login_page.preencherSenha(user.dadosInvalidos.senhaInvalida)
    login_page.clicarLogin()
    login_page.validarMensagemErro('Senha inválida.')
  })

  it('Login com e-mail maiúsculo', () => {

    login_page.preencherEmail(user.dadosValidos.email.toUpperCase())
    login_page.preencherSenha(user.dadosValidos.senha)
    login_page.clicarLogin()
    login_page.validarMensagemSucessoLogin(user.dadosValidos.email.toUpperCase())
  })

  it('Deve realizar login ao pressionar ENTER', () => {
    login_page.preencherEmail(user.dadosValidos.email)
    login_page.preencherSenha(user.dadosValidos.senha)

    cy.get('#password').type('{enter}')

    login_page.validarMensagemSucessoLogin(user.dadosValidos.email)
  })

  it('Deve redirecionar para cadastro ao clicar em "Ainda não tem conta?"', () => {

    cy.contains('Ainda não tem conta?').click()
    cy.url().should('include', '/register')
  })

  it('Deve selecionar o checkbox "Lembrar de mim"', () => {
    cy.get('#materialUnchecked')
      .check()
      .should('be.checked')
  })

  it('Deve desmarcar o checkbox "Lembrar de mim"', () => {
    cy.get('#materialUnchecked')
      .check()
      .uncheck()
      .should('not.be.checked')
  })
})
