export namespace Table{
    export interface IColumn{
        header: string,
        property: string,
        isImage?: boolean,
        isDate?: boolean,
        isBoolean?: boolean,
    }
    export interface IOperators{
        icon: string,
        title: string
    }
}