import React from 'react';
import Button from './Button.js';

const Row = ({ inputs, handleInput }) => {
  return (
    <div className='row flex-center'>
      {inputs.map((input) => {
        return <Button key={input} input={input} handleInput={handleInput} />;
      })}
    </div>
  );
};

export default Row;
