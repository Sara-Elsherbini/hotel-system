export namespace Table{
    export interface IColumn{
        header: string,
        property: string,
        isImage?: boolean,
        isDate?: boolean,
    }
    export interface IOperators{
        icon: string,
        title: string
    }
}