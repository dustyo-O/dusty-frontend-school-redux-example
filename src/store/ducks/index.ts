import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type DucksState = {
  ducks: string[];
};

const defaultState: DucksState = { ducks: [] };

export const ducksSlice = createSlice({
  name: 'ducks',
  initialState: defaultState,
  reducers: {
    load: (state, action: PayloadAction<DucksState['ducks']>) => {
      state.ducks = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { load } = ducksSlice.actions;

export const ducksReducer = ducksSlice.reducer;
