const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',  // ✅ this is the root URL
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,   // how long Cypress waits for elements
    video: true,                    // record video of test runs
    screenshotOnRunFailure: true,   // take screenshot if a test fails
  },
})
