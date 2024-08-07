const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 30000,
    testIsolation: true,
    experimentalOriginDependencies: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
});
