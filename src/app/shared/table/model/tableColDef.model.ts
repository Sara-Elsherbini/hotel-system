export interface TableColDef{
    field?: string,
    headerName?: string;
    valueGetter?: (row: any)=> string | boolean | number;
    valueFormatter?: (value: any)=> string;
}