// react
import React from 'react';

// assets
import { MdError } from 'react-icons/md';

const FormErrorMessage: React.FC<FormErrorMessageProps> = props => {
  const { message } = props;

  return (
    <div className='flex gap-2 w-full max-w-sm'>
      <MdError className='min-w-fit text-red-500' size={16} />
      <p className='text-red-500 leading-snug select-none'>{message}</p>
    </div>
  );
};

export default FormErrorMessage;
