import { AppThunk } from '../../app/store'
import { PageStep } from '../../types/model'
import { slice } from './slice'

const setPageStep = (step: PageStep): AppThunk => (dispatch) => {
	dispatch(slice.actions._setPageStep({ pageStep: step }))
	return
}

const setCurrentCategoryRow = (code: string): AppThunk => (dispatch) => {
	dispatch(slice.actions._setCurrentCategoryCode({ code: code }))
	return
}

const appActions = {
	...slice.actions,
	setPageStep,
	setCurrentCategoryRow,
}

export default appActions
