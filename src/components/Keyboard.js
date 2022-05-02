import React from 'react';
import Row from './Row.js';

const Keyboard = () => {
  const row_1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row_2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row_3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'];
  const rows = [row_1, row_2, row_3];
  return (
    <div>
      {rows.map((row, index) => {
        return <Row key={index} inputs={row} />;
      })}
    </div>
  );
};

export default Keyboard;
