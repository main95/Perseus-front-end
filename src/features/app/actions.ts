import { AppThunk } from '../../app/store'
import { PageStep } from '../../types/model'
import { slice } from './slice'

const setPageStep = (step: PageStep): AppThunk => (dispatch) => {
	dispatch(slice.actions._setPatientData({ pageStep: step }))
	return
}

const appActions = {
	...slice.actions,
	setPageStep,
}

export default appActions
