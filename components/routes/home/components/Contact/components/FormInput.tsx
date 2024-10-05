import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import FormErrorMessage from './FormErrorMessage';

export interface FormInputProps {
    id: string;
    label: string;
    type?: string;
    isInvalid: boolean;
    errMsg?: string;
    register: UseFormRegisterReturn;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type, isInvalid, errMsg, register }) => {
    return (
        <div className='flex flex-col gap-2 mb-4'>
            <label className='text-neutral-300 select-none' htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-sm transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
                type={type}
                {...register}
            />
            {isInvalid && <FormErrorMessage message={errMsg} />}
        </div>
    );
};

export default FormInput;
