export namespace Auth {
  export interface SignIn {
    email?: string;
    password?: string;
  }

  export interface SignUp {
    email?: string;
    userName?: string;
    password?: string;
  }
}
