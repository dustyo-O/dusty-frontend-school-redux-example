import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter';
import { ducksReducer } from './ducks';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ducks: ducksReducer,
  },
  //@ts-expect-error
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export type RootState = ReturnType<typeof store.getState>
