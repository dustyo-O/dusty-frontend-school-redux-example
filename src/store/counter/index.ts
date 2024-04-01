import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CounterState = {
  value: number;
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    add: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, add } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
