export namespace Auth {
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
