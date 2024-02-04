// packages
import React from 'react';

// components
import FormErrorMessage from './FormErrorMessage';

// assets
import LoadingSVG from '@/assets/svg/rolling.svg';

const FormButton: React.FC<FormButtonProps> = props => {
  const { isSubmitting, isRateLimited, errMsg } = props;

  return (
    <div className='flex flex-wrap items-center gap-x-4 gap-y-8 mt-5'>
      <button
        className={`flex items-center gap-2 px-4 py-2 font-medium rounded-md select-none transition-all ease-in-out delay-100 ${
          isRateLimited
            ? 'text-red-200 bg-red-700 cursor-not-allowed'
            : 'text-neutral-300 bg-blue-900 cursor-pointer'
        }`}
        disabled={isSubmitting || isRateLimited}
      >
        <span className=''>
          {!isSubmitting && !isRateLimited && 'Send message'}
          {isSubmitting && !isRateLimited && 'Sending...'}
          {isRateLimited && 'Rate Limited'}
        </span>
        {isSubmitting && <LoadingSVG width={24} height={24} />}
      </button>
      {!!errMsg && <FormErrorMessage message={errMsg} />}
    </div>
  );
};

export default FormButton;
