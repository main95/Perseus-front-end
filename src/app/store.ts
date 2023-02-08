import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from '../features/app/slice';
import orderReducer from '../features/order/slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    order: orderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
