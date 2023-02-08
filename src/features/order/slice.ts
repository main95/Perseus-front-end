import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../types/Order';

export interface OrderState {
  currentOrder: Order
}

const initialState: OrderState = {
  currentOrder: {
    table: '',
    covereds: 0,
    name: '',
  }
}

export const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    _setOrderTable: (state, { payload }: PayloadAction<{ table: string }>) => {
			state.currentOrder = {
        ...state.currentOrder,
        table: payload.table,
      }
		},
    _setOrderCovereds: (state, { payload }: PayloadAction<{ covereds: number }>) => {
			state.currentOrder = {
        ...state.currentOrder,
        covereds: payload.covereds,
      }
		},
    _setOrderName: (state, { payload }: PayloadAction<{ name: string }>) => {
			state.currentOrder = {
        ...state.currentOrder,
        name: payload.name,
      }
		},
  },
});

export default slice.reducer;
