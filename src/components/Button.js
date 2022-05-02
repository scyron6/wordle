import React from 'react';

const Button = ({ input, handleInput }) => {
  return (
    <div className='button flex-center' onClick={() => handleInput(input)}>
      {input}
    </div>
  );
};

export default Button;
