import React from 'react';
import { useDispatch } from 'react-redux';
import Board from './Board.js';
import { getWord, reset } from './gameSlice.js';
import Keyboard from './Keyboard.js';

const Game = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reset());
    dispatch(getWord());
  };

  return (
    <div>
      <Board />
      <Keyboard />
      <button className='new clickable' onClick={() => handleClick()}>
        New Game
      </button>
    </div>
  );
};

export default Game;
