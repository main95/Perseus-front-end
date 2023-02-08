import { AppThunk } from '../../app/store'
import { slice } from './slice'

const setOrderTable = (table: string): AppThunk => (dispatch) => {
	dispatch(slice.actions._setOrderTable({ table: table }))
	return
}

const setOrderCovereds = (covereds: number): AppThunk => (dispatch) => {
	dispatch(slice.actions._setOrderCovereds({ covereds: covereds }))
	return
}

const setOrderName = (name: string): AppThunk => (dispatch) => {
	dispatch(slice.actions._setOrderName({ name: name }))
	return
}

const orderActions = {
	...slice.actions,
	setOrderTable,
	setOrderCovereds,
	setOrderName,
}

export default orderActions
