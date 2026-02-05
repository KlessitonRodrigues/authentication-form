export namespace Auth {
  export interface AuthUser {
    userId: string;
    email: string;
    userName: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface SignInRequest {
    email?: string;
    password?: string;
  }

  export interface SignUpRequest {
    email?: string;
    userName?: string;
    password?: string;
  }
}
