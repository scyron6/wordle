import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWord } from './wordAPI';

const initialState = {
  word: '',
  tiles: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
  attempt: 0,
  letter: 0,
  done: false,
  status: 'idle',
};

export const getWord = createAsyncThunk('counter/fetchWord', async () => {
  const response = await fetchWord();
  return response;
});

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addLetter: (state, action) => {
      if (!state.done && state.letter < 5) {
        state.tiles[state.attempt][state.letter] = action.payload;
        state.letter++;
      }
    },
    removeLetter: (state) => {
      if (!state.done && state.letter > 0) {
        state.tiles[state.attempt][state.letter - 1] = '';
        state.letter--;
      }
    },
    handleEnter: (state) => {
      if (state.done) return;

      if (checkWon(state)) {
        state.done = true;
      } else {
        state.letter = 0;
      }
      state.attempt++;
    },
    reset: (state) => {
      state.done = false;
      state.attempt = 0;
      state.letter = 0;
      state.tiles = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
      ];
    },
  },
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

export const { addLetter, removeLetter, handleEnter, reset } =
  gameSlice.actions;

export const selectWord = (state) => state.game.word;
export const selectTiles = (state) => state.game.tiles;
export const selectAttempt = (state) => state.game.attempt;
export const selectLetter = (state) => state.game.letter;
export const selectStatus = (state) => state.game.status;

export default gameSlice.reducer;

const checkWon = (state) => {
  return state.word === state.tiles[state.attempt].join('');
};
