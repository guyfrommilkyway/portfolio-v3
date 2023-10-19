// react
import React from 'react';

// assets
import { MdError } from 'react-icons/md';

const FormErrorMessage: React.FC<FormErrorMessageProps> = props => {
  const { message } = props;

  return (
    <div className='flex items-center gap-2'>
      <MdError className='text-red-600' size={20} />
      <span className='text-red-600 select-none'>{message}</span>
    </div>
  );
};

export default FormErrorMessage;
