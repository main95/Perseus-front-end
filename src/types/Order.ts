import { Table } from "./Table"

export type Order = {
  _id: string,
  table: Table,
  covereds: number,
}
