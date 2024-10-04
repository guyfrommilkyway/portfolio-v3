// react
import React from 'react';

interface Props {
  message?: string;
}

const FormErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className='w-full max-w-sm'>
      <p className='text-red-600 leading-tight select-none'>{message}</p>
    </div>
  );
};

export default FormErrorMessage;
