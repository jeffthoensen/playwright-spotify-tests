/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      headless: true, 
      viewport: { width: 1280, height: 720 }, 
    },
    projects: [
      { name: 'chromium', use: { browserName: 'chromium' } },
    ],
  };
  
  module.exports = config;