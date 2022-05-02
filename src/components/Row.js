import React from 'react';
import Button from './Button.js';

const Row = ({ inputs }) => {
  return (
    <div className='row flex-center'>
      {inputs.map((input) => {
        return <Button key={input} input={input} />;
      })}
    </div>
  );
};

export default Row;
