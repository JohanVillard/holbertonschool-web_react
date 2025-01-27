import { RowId, RowElement } from "./interface";

declare function insertRow(row: RowElement): RowId;
declare function deleteRow(row: RowId): void;
declare function updateRow(rowId: RowId, row: RowElement): RowId;
