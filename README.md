# spotify-playwright-tests

Playwright end-to-end test for logging into Spotify's web player, using the page object pattern (`LoginPage`).

## What's tested

- Successful login to open.spotify.com with valid credentials, verified by the post-login redirect URL

## Setup

Requires a `.env` file with `SPOTIFY_USERNAME` and `SPOTIFY_PASSWORD` set.

```
npm install
npx playwright test
```
