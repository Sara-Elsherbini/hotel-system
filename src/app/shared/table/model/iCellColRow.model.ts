import { TableColDef } from "./tableColDef.model";

export interface iCellColRow{
    col: TableColDef;
    row: {[key: string | number | symbol ]: any };
}