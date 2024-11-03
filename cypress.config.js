const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   // specPattern: 'cypress/Test-Cases/**/*.cy.{js,jsx,ts,tsx0}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
