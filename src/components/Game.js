import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from './Board.js';
import { selectWord, getWord } from './gameSlice.js';
import Keyboard from './Keyboard.js';

const Game = () => {
  const word = useSelector(selectWord);
  const dispatch = useDispatch();
  const [tiles, setTiles] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);
  const [attempt, setAttempt] = useState(0);
  const [letter, setLetter] = useState(0);
  const [done, setDone] = useState(false);

  const handleInput = (value) => {
    if (done) {
      return;
    }

    let newTiles;
    if (value === 'BACKSPACE') {
      if (letter > 0) {
        newTiles = [...tiles];
        newTiles[attempt][letter - 1] = '';
        setLetter(letter - 1);
      }
    } else if (value === 'ENTER') {
      if (tiles[attempt].join('') === word) {
        setDone(true);
      }
      setAttempt(attempt + 1);
      setLetter(0);
    } else {
      if (letter === 5) {
        return;
      }

      newTiles = [...tiles];
      newTiles[attempt][letter] = value;
      setTiles(newTiles);
      setLetter(letter + 1);
    }
  };

  const reset = () => {
    const emptyBoard = [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ];
    setTiles(emptyBoard);
    setDone(false);
    setAttempt(0);
    setLetter(0);
    dispatch(getWord());
  };

  return (
    <div>
      <Board tiles={tiles} attempt={attempt} />
      <Keyboard handleInput={handleInput} />
      <button className='new clickable' onClick={() => reset()}>
        New Game
      </button>
    </div>
  );
};

export default Game;
