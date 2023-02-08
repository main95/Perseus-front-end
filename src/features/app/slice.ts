import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageStep } from '../../types/model';
import { Table } from '../../types/Table';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
  pageStep: PageStep
  currentTable: Table
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
  pageStep: 'tables',
  currentTable: '',
}

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    _setPageStep: (state, { payload }: PayloadAction<{ pageStep: PageStep }>) => {
			state.pageStep = payload.pageStep
		},
    _setCurrentTable: (state, { payload }: PayloadAction<{ table: Table }>) => {
			state.currentTable = payload.table
		},
  },
});

export default slice.reducer;
