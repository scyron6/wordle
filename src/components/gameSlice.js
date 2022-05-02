import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWord } from './wordAPI';

const initialState = {
  word: '',
  status: 'idle',
};

export const getWord = createAsyncThunk('counter/fetchWord', async () => {
  const response = await fetchWord();
  return response;
});

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWord.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWord.fulfilled, (state, action) => {
        state.status = 'idle';
        state.word = action.payload;
      });
  },
});

export const selectWord = (state) => state.game.word;
export const selectStatus = (state) => state.game.status;

export default gameSlice.reducer;
