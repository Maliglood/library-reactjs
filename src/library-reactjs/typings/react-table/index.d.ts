
declare module 'react-table' {
    import * as React from "react";

    interface SortMethod {
        id: string;
        desc: boolean
    }

    export type ColumnAccessor<T> = (o: T) => any
    export type CellRenderer<T> = (row: Row<T>) => React.ReactElement<any>

    export interface Row<T> {
        index: number
        value: any
        original: T
        column: Column<T>
    }

    export interface Column<T> {
        width?: number
        Header?: string
        Cell?: CellRenderer<T>
        id?: string
        minWidth?: number,
        className?: string
        accessor?: ColumnAccessor<T> | keyof T
        sortMethod?: (a: any, b: any) => number
    }

    interface TableProps {
        defaultSorted?: SortMethod[]
        className?: string
        data: any
        columns: Column[]
        defaultPageSize?: number
        showPagination?: boolean
    }

    class ReactTable extends React.Component<TableProps, any> {

    }

    export default ReactTable;
}