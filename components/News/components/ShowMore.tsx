// packages
import React from 'react';

// utils
import { toastError } from '@/utils/notifications';

const ShowMore: React.FC = () => {
  return (
    <div className='w-fit px-4 py-2'>
      <span
        className='text-sm text-white font-semibold transition ease-in-out delay-100 cursor-pointer hover:underline select-none'
        onClick={() => toastError("Feature isn't available yet")}
      >
        Show More
      </span>
    </div>
  );
};

export default ShowMore;
