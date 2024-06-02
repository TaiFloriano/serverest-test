const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
    baseUrl: 'https://front.serverest.dev/',
    video: true,
    chromeWebSecurity: false,
    projectId: "krevvz",
    env: {
      local: 'http://localhost:3000/',
      prod: 'https://serverest.dev/'
    }
  },
};
