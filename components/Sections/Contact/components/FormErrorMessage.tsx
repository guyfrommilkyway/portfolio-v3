// react
import React from 'react';

interface PFormErrorMessage {
  message?: string;
}

const FormErrorMessage: React.FC<PFormErrorMessage> = ({ message }) => {
  return (
    <div className='w-full max-w-sm'>
      <p className='text-red-600 leading-tight select-none'>{message}</p>
    </div>
  );
};

export default FormErrorMessage;
