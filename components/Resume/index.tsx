// packages
import React from 'react';

// components
import Card from '@/components/Card';

const Resume: React.FC = () => {
  return (
    <Card height='h-fit'>
      <p className='mx-4 mb-4 text-white text-lg font-semibold'>
        View or Download
      </p>
      <a
        className='block w-fit mx-4 px-4 py-2 text-neutral-700 font-medium select-none bg-white rounded-3xl hover:text-black'
        href={process.env.NEXT_PUBLIC_RESUME}
        target='_blank'
        referrerPolicy='no-referrer'
      >
        Resume
      </a>
    </Card>
  );
};

export default Resume;
