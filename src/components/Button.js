import React from 'react';
import { useDispatch } from 'react-redux';
import { addLetter, removeLetter, handleEnter } from './gameSlice';

const Button = ({ input }) => {
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
    <div className='button flex-center' onClick={() => handleInput(input)}>
      {input}
    </div>
  );
};

export default Button;
