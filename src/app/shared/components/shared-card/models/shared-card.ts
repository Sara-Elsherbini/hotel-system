export namespace Card{
  export interface ICard{
    key:string;
    property:string;
    isImage?: boolean,
    isDate?: boolean,
    isBoolean?: boolean,
  }
  export interface IOperations{
   icon:string,
   title:string
  }
}
