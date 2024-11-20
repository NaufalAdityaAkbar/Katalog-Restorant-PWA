const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/**/*.spec.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: true,
      windowSize: '1200x900',
      waitForAction: 1000,
      waitForTimeout: 10000,
      chrome: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        defaultViewport: {
          width: 1200,
          height: 900
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'restaurant-apps'
};