import { AppThunk } from '../../app/store'
import { PageStep } from '../../types/model'
import { Table } from '../../types/Table'
import { slice } from './slice'

const setPageStep = (step: PageStep): AppThunk => (dispatch) => {
	dispatch(slice.actions._setPageStep({ pageStep: step }))
	return
}

const setCurrentTable = (table: Table): AppThunk => (dispatch) => {
	dispatch(slice.actions._setCurrentTable({ table: table }))
	return
}

const appActions = {
	...slice.actions,
	setPageStep,
	setCurrentTable,
}

export default appActions
