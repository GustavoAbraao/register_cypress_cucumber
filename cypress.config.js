const cucumber = require("cypress-cucumber-preprocessor").default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
       on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature",
  },
});

// const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default;

// module.exports = defineConfig({
//   e2e: {
//     specPattern: 'cypress/e2e/step_definitions/*.feature',
//     viewportWidth: 1366,
//     viewportHeight: 768,
//     defaultCommandTimeout: 50000,
//     responseTimeout: 50000,
//     requestTimeout: 50000,
//     waitForAnimations: true,
//     chromeWebSecurity: false,

//     env: {
//       "TAGS": "not @ignore",
//       "NODE_TLS_REJECT_UNAUTHORIZED": 0

//     },
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', cucumber());
//     },
//   }
// });