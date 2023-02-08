// import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const selectCurrentOrderName = (state: RootState) => state.order.currentOrder.name
export const selectCurrentOrderTable = (state: RootState) => state.order.currentOrder.table
export const selectCurrentOrderCovereds = (state: RootState) => state.order.currentOrder.covereds
