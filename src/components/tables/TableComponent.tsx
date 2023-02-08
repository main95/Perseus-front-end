import { styled } from '@mui/material'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import appActions from '../../features/app/actions'

const StyledTable = styled('div')<{ selected: boolean }>(({theme, selected}) => ({
  backgroundColor: selected ? theme.palette.success.main : theme.palette.info.main,
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1rem',
}))

type Props = {
  tableName: string,
  isSelected: boolean,
}

const TableComponents: React.FC<Props> = ({
  tableName,
  isSelected,
}) => {
  const dispatch: ThunkDispatch<RootState, unknown, Action<string>> = useDispatch()

  const handleClick = () => {
    dispatch(appActions.setCurrentTable(tableName))
  }

  return (
    <StyledTable
      style={{ gridArea: tableName }}
      selected={isSelected}
      onClick={handleClick}
    >
      <div>
        {tableName}
      </div>
    </StyledTable>
  )
}

export default TableComponents
