import { RootState } from '../store';

export const selectDucks = (state: RootState) => state.ducks.ducks;
