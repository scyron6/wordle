import React from 'react';
import Tiles from './Tiles.js';
import { useSelector } from 'react-redux';
import { selectStatus } from './gameSlice.js';

const Board = ({ tiles, attempt }) => {
  const status = useSelector(selectStatus);
  if (status === 'idle') {
    return (
      <div className='flex-center flex-column gap-8 mb-12'>
        {tiles.map((row, index) => {
          return <Tiles key={index} row={row} submitted={attempt > index} />;
        })}
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default Board;
