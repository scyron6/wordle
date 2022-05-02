import React from 'react';
import Tile from './Tile.js';
import { useSelector } from 'react-redux';
import { selectWord } from './gameSlice.js';

const Tiles = ({ row, submitted }) => {
  const word = useSelector(selectWord);
  return (
    <div className='flex-center gap-4'>
      {row.map((tile, index) => {
        return (
          <Tile
            key={index}
            value={tile}
            answer={
              tile === word[index] && submitted
                ? ' fully'
                : word.includes(tile) && submitted
                ? ' partially'
                : submitted
                ? ' none'
                : ''
            }
          />
        );
      })}
    </div>
  );
};

export default Tiles;
