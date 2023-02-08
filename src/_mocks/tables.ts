import { TABLE_GRID_CELL_SIZE } from '../styleguide/Size'
import { Table } from '../types/Table'

export const tablesTemplateArea = `
  'A01 A01 . . . .'
  'A02 A02 . . . .'
  '. . . . . .'
  '. . . . . .'
  '. . . . A03 A03'
  '. . . . A04 A04'
`

export const tablesTemplateColumns = `
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
`

export const tablesTemplateRows = `
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
  ${TABLE_GRID_CELL_SIZE}px 
`

export const mockTables: Table[] = ['A01', 'A02', 'A03', 'A04']