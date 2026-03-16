import { faker } from '@faker-js/faker'

export const user = {
  dadosValidos: {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password({ length: 6 })
  },
  dadosInvalidos: {
    emailInvalido : faker.internet.email().replace('@', ''),
    senhaInvalida : faker.internet.password({ length: 3 })
  }
}