import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { StyledCommonPageWrapper } from '../components/common/CommonComponents'
import TableComponents from '../components/tables/TableComponent'
import { selectCurrentOrderTable } from '../features/order/selectors'
import { mockTables, tablesTemplateArea, tablesTemplateColumns, tablesTemplateRows } from '../_mocks/tables'

const TableContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridGap: '5px',
  padding: '10px',
  gridTemplateAreas: tablesTemplateArea,
  gridTemplateColumns: tablesTemplateColumns,
  gridTemplateRows: tablesTemplateRows,
  overflow: 'scroll',
}))

const XSeoPage: React.FC = () => {
  const tables = mockTables

  const currentSelectedTable = useSelector(selectCurrentOrderTable)

  return (
    <StyledCommonPageWrapper>
      <TableContainer>
        {tables.map((table, index) => {
          return (
            <TableComponents
              key={`table_${table}_${index}`}
              tableName={table}
              isSelected={table === currentSelectedTable}
            />
          )
        })}
      </TableContainer>
    </StyledCommonPageWrapper>
  )
}

export default XSeoPage
