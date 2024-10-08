import React from 'react';

import FormErrorMessage from './FormErrorMessage';
import { FormInputProps } from './FormInput';

const FormTextarea: React.FC<FormInputProps> = props => {
    const { id, label, isInvalid, errMsg, register } = props;

    return (
        <div className='flex flex-col gap-2 mb-4'>
            <label className='text-neutral-300 select-none' htmlFor={id}>
                {label}
            </label>
            <textarea
                id={id}
                className='w-full px-4 py-2 text-neutral-300 bg-neutral-800 rounded-sm transition-colors ease-in-out delay-100 hover:bg-neutral-700 focus:text-white focus:bg-neutral-700 focus:outline-none'
                rows={8}
                {...register}
            ></textarea>
            {isInvalid && <FormErrorMessage message={errMsg} />}
        </div>
    );
};

export default FormTextarea;
