export namespace Auth {
  export interface ILoginReq{
    email:string,
    password:string
  }
  export interface ILoginRes {
    success: boolean
    message: string
    data: UserData
  }

  export interface UserData {
    user: User
    token: string
  }

  export interface User {
    _id: string
    userName: string
    role: string
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
