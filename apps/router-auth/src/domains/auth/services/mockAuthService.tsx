export type User = {
  email: string;
};

class MockAuthService {
  isAuthenticated = false;

  async login() {
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        this.isAuthenticated = true;
        resolve({ email: 'fake@user.com' });
      }, 100);
    });
  }

  async logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.isAuthenticated = false;
        resolve(null);
      }, 100);
    });
  }
}

export const mockAuthService = new MockAuthService();
