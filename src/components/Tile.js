import React from 'react';

const Tile = ({ value, answer }) => {
  return <div className={'tile flex-center' + answer}>{value}</div>;
};

export default Tile;
