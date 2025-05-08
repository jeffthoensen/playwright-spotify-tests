class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('input[id="login-username"]');
      this.passwordInput = page.locator('input[id="login-password"]');
      this.loginButton = page.locator('button[data-testid="login-button"]');
    }
  
    async navigate() {
      await this.page.goto('https://accounts.spotify.com/login');
    }
  
    async login(username, password) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
      // Wait for navigation to ensure login is complete
      await this.page.waitForURL('https://open.spotify.com/**');
    }
  }
  
  module.exports = { LoginPage };