// packages
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

// components
import FormErrorMessage from './FormErrorMessage';

interface PFormInputs {
  id: string;
  label: string;
  type: string;
  isInvalid: boolean;
  errMsg?: string;
  register: UseFormRegisterReturn;
}

const FormInput: React.FC<PFormInputs> = ({
  id,
  label,
  type,
  isInvalid,
  errMsg,
  register,
}) => {
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
