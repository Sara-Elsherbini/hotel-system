export namespace Auth {
  export interface ILogin{
    email:string,
    password:string
  }
  export interface IRegister {
    userName: string;
    email: string;
    country: string;
    phoneNumber: string;
    profileImage?: string;
    password: string;
    confirmPassword: string;
  }

  export interface IForgetPass{
    email: string,
  }

  export interface IResetPass{
    seed:string,
    email:string,
    password:string,
    confirmPassword:string
  }
}
