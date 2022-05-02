import React from 'react';
import Tiles from './Tiles.js';
import { useSelector } from 'react-redux';
import { selectStatus, selectAttempt } from './gameSlice.js';

const Board = () => {
  const status = useSelector(selectStatus);
  const attempt = useSelector(selectAttempt);
  if (status === 'idle') {
    return (
      <div className='flex-center flex-column gap-8 mb-12'>
        {Array(5)
          .fill(0)
          .map((value, index) => {
            return (
              <Tiles key={index} row={index} submitted={attempt > index} />
            );
          })}
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default Board;
