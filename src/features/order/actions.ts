import { AppThunk } from '../../app/store'
import { Dish } from '../../types/Dish'
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

const setDishes = (dishes: Dish[]): AppThunk => (dispatch) => {
	dispatch(slice.actions._setDishes({ dishes: dishes }))
	return
}

const addQuantity = (dishId: string): AppThunk => (dispatch) => {
	dispatch(slice.actions._addQuantity({ id: dishId }))
	return
}

const orderActions = {
	...slice.actions,
	setOrderTable,
	setOrderCovereds,
	setOrderName,
	setDishes,
	addQuantity,
}

export default orderActions
