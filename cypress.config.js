const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "3prhqe",
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto automação Web - Qazando Shop',
      reportPageTitle: 'Projeto automação Web - Qazando Shop'
    },
    baseUrl: 'https://www.automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

