/// <reference types="cypress" />

import { user } from '../support/factories/userFactory'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import commom_page from '../support/pages/commom_page'

describe('Cadastro de usuário', () => {

  beforeEach(('Acessar tela de cadastro de usuário'), () => {

    commom_page.acessarCadastroUsurario()

  })
  it('Cadastro com sucesso', () => {
    
    cadastro_usuario_page.preencherNome(user.dadosValidos.name)
    cadastro_usuario_page.preencherEmail(user.dadosValidos.email)
    cadastro_usuario_page.preencherSenha(user.dadosValidos.senha)
    cadastro_usuario_page.clicarCadastrar()
    cy.url().should('include', '/my-account')
    cadastro_usuario_page.validarMensagemCadastroSucesso(user.dadosValidos.name)
  })
  it('Cadastro sem nome de usuário', () => {

    cadastro_usuario_page.preencherEmail(user.dadosValidos.email)
    cadastro_usuario_page.preencherSenha(user.dadosValidos.senha)
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
  })
  it('Cadastro informando email inválido', () => {

    cadastro_usuario_page.preencherNome(user.dadosValidos.name)
    cadastro_usuario_page.preencherEmail(user.dadosInvalidos.emailInvalido)
    cadastro_usuario_page.preencherSenha(user.dadosValidos.senha)
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
  })  
  it('Cadastro sem informar email', () => {

    cadastro_usuario_page.preencherNome(user.dadosValidos.name)
    cadastro_usuario_page.preencherSenha(user.dadosValidos.senha)
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
  }) 
  it('Cadastro com todos os campos vazios', () => {

    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
  })
  it('Cadastro sem informar senha', () => {

    cadastro_usuario_page.preencherNome(user.dadosValidos.name)
    cadastro_usuario_page.preencherEmail(user.dadosValidos.email)

    cadastro_usuario_page.clicarCadastrar()

    cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
  })
  it('Cadastro com senha inválida', () => {

    cadastro_usuario_page.preencherNome(user.dadosValidos.name)
    cadastro_usuario_page.preencherEmail(user.dadosValidos.email)
    cadastro_usuario_page.preencherSenha(user.dadosInvalidos.senhaInvalida)
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
  })
  it('Cadastro informando e-amail com letras maiúsculas', () => {

    cadastro_usuario_page.preencherNome(user.dadosValidos.name)
    cadastro_usuario_page.preencherEmail(user.dadosValidos.email.toUpperCase())
    cadastro_usuario_page.preencherSenha(user.dadosValidos.senha)
    cadastro_usuario_page.clicarCadastrar()
    cy.url().should('include', '/my-account')
    cadastro_usuario_page.validarMensagemCadastroSucesso(user.dadosValidos.name) 

  })
})
