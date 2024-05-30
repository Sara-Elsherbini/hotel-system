import { DefaultColConf, TableOperator, TableColDef } from "./";

interface Table{
    colDefs:TableColDef[];
    data: any[];
    operators:  TableOperator[];
    defaultColConf?: DefaultColConf;
}
export default Table;