import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageStep } from '../../types/model';

export interface CounterState {
  pageStep: PageStep
  currentCategoryCode: string
}

const initialState: CounterState = {
  pageStep: 'tables',
  currentCategoryCode: '',
}

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    _setPageStep: (state, { payload }: PayloadAction<{ pageStep: PageStep }>) => {
			state.pageStep = payload.pageStep
		},
    _setCurrentCategoryCode: (state, { payload }: PayloadAction<{ code: string }>) => {
			state.currentCategoryCode = payload.code
		},
  },
});

export default slice.reducer;
