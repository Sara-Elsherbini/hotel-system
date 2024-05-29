export interface TableOperator{
    title: string,
    icon:  string,
    action?: (row: any) => void;
}