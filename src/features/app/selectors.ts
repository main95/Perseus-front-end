// import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const selectPageStep = (state: RootState) => state.app.pageStep
export const selectCurrentCategoryCode = (state: RootState) => state.app.currentCategoryCode
