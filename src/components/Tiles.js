import React from 'react';
import Tile from './Tile.js';
import { useSelector } from 'react-redux';
import { selectWord, selectTiles } from './gameSlice.js';

const Tiles = ({ row, submitted }) => {
  const word = useSelector(selectWord);
  const tiles = useSelector(selectTiles);
  return (
    <div className='flex-center gap-4'>
      {tiles[row].map((tile, index) => {
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
