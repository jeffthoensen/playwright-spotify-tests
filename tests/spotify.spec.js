const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('Spotify homepage loads', async ({ page }) => {
  await page.goto('https://www.spotify.com');
  const title = await page.title();
  expect(title).toContain('Spotify');
});

test('Spotify login', async ({ page }) => {
  await page.goto('https://www.spotify.com');
  await page.click('button[data-testid="login-button"]');
  await page.waitForURL('https://accounts.spotify.com/**', { timeout: 10000 });
  await page.fill('input[id="login-username"]', process.env.SPOTIFY_USERNAME);
  await page.click('button[data-testid="login-button"]');
  const isVerificationPage = await page.url().includes('challenge.spotify.com') && (await page.locator('text=/Enter the 6-digit code.*sent to you/i').count() > 0);
  if (isVerificationPage) {
    await page.waitForSelector('button >> text=/Log in with a password/i', { timeout: 10000 });
    await page.locator('button >> text=/Log in with a password/i').scrollIntoViewIfNeeded();
    await page.click('button >> text=/Log in with a password/i');
  }
  await page.fill('input[id="login-password"]', process.env.SPOTIFY_PASSWORD);
  await page.click('button[data-testid="login-button"]');
  await page.waitForURL('https://open.spotify.com/**', { timeout: 5000 });
  expect(page.url()).toContain('open.spotify.com');
});