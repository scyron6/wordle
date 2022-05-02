import React from 'react';
import Tile from './Tile.js';
import { useSelector } from 'react-redux';
import {
  selectStatus,
  selectAttempt,
  selectTiles,
  selectWord,
} from './gameSlice.js';

const Board = () => {
  const status = useSelector(selectStatus);
  const attempt = useSelector(selectAttempt);
  const tiles = useSelector(selectTiles);
  const word = useSelector(selectWord);

  if (status === 'idle') {
    return (
      <div className='flex-center flex-column gap-8 mb-12'>
        {tiles.map((row, index) => {
          return (
            <div className='flex-center gap-4'>
              {row.map((tile, spot) => {
                return (
                  <Tile
                    key={index.toString() + spot.toString()}
                    value={tile}
                    answer={
                      word[spot] === tile && attempt > index
                        ? ' fully'
                        : word.includes(tile) && attempt > index
                        ? ' partially'
                        : attempt > index
                        ? ' none'
                        : ''
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default Board;
