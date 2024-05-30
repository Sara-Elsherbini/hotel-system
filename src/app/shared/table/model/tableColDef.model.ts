export interface TableColDef{
    field?: string,
    headerName?: string;
    valueGetter?: (row: any)=> string | boolean | number | symbol;
    valueFormatter?: (value: any)=> string;
    useTemplate?: (value: any) => Element;
}