const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
require('dotenv').config();

test('should log in to Spotify successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(process.env.SPOTIFY_USERNAME, process.env.SPOTIFY_PASSWORD);
  await expect(page).toHaveURL('https://open.spotify.com/**');
});