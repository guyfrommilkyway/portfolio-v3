// packages
import React from 'react';

// components
import FormErrorMessage from './FormErrorMessage';

const FormInput: React.FC<FormInputProps> = props => {
  const { id, label, type, isInvalid, errMsg, register } = props;

  return (
    <div className='flex flex-col gap-2 mb-4'>
      <label className='text-neutral-300 select-none' htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-md transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
        type={type}
        {...register}
      />
      {isInvalid && <FormErrorMessage message={errMsg} />}
    </div>
  );
};

export default FormInput;
