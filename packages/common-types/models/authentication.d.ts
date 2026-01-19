declare namespace Authentication {
  interface User {
    id: string;
    username: string;
    email: string;
    roles: string[];
    createdAt: Date;
    updatedAt: Date;
  }

  interface LoginRequest {
    username: string;
    password: string;
  }

  interface LoginResponse {
    token: string;
    user: User;
  }

  interface RegisterRequest {
    username: string;
    email: string;
    password: string;
  }

  interface RegisterResponse {
    user: User;
  }

  interface RefreshTokenRequest {
    token: string;
  }

  interface RefreshTokenResponse {
    token: string;
  }
}
