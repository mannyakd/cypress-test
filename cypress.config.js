const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 900,
  watchForFileChanges: false,
  video: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
