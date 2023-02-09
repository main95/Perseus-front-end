import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dish } from '../../types/Dish';
import { Order } from '../../types/Order';

export interface OrderState {
  currentOrder: Order
  dishes: Dish[]
}

const initialState: OrderState = {
  currentOrder: {
    table: '',
    covereds: 0,
    name: '',
  },
  dishes: [],
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
    _setDishes: (state, { payload }: PayloadAction<{ dishes: Dish[] }>) => {
			state.dishes = payload.dishes
		},
    _addQuantity: (state, { payload }: PayloadAction<{ id: string }>) => {
      const dishId = payload.id
      const newDishes = state.dishes.reduce((result, dish) => {
        if (dish._id === dishId) {
          const newDish = {
            ...dish,
            quantity: dish.quantity + 1,
          }
          result.push(newDish)
        } else {
          result.push(dish)
        }
        return result
      }, [] as Dish[])
			state.dishes = newDishes
		},
  },
});

export default slice.reducer;
