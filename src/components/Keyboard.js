import React from 'react';
import { useDispatch } from 'react-redux';
import { addLetter, removeLetter, handleEnter } from './gameSlice';

const Keyboard = () => {
  const row_1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row_2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row_3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'];
  const rows = [row_1, row_2, row_3];
  const dispatch = useDispatch();

  const handleInput = (input) => {
    if (input === 'BACKSPACE') {
      dispatch(removeLetter());
    } else if (input === 'ENTER') {
      dispatch(handleEnter());
    } else {
      dispatch(addLetter(input));
    }
  };

  return (
    <div>
      {rows.map((row) => {
        return (
          <div className='row flex-center'>
            {row.map((input) => {
              return (
                <div
                  className='flex-center button'
                  onClick={() => handleInput(input)}>
                  {input}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
