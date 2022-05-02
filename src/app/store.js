import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../components/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
