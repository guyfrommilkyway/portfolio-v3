// react
import React from 'react';

const FormErrorMessage: React.FC<FormErrorMessageProps> = props => {
  const { message } = props;

  return (
    <div className='w-full max-w-sm'>
      <p className='text-red-600 leading-tight select-none'>{message}</p>
    </div>
  );
};

export default FormErrorMessage;
