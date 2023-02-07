// import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const selectPageStep = (state: RootState) => state.app.pageStep
