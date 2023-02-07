import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageStep } from '../../types/model';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
  pageStep: PageStep
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
  pageStep: 'tables'
}

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    _setPatientData: (state, { payload }: PayloadAction<{ pageStep: PageStep }>,
		) => {
			state.pageStep = payload.pageStep
		},
  },
});

export default slice.reducer;
