// packages
import React from 'react';
import Image from 'next/image';

const Photo: React.FC = () => {
  return (
    <div className='mb-10 select-none'>
      <div className='relative w-full max-w-[240px] h-[320px] rounded-sm overflow-hidden transition-all ease-in-out delay-100 cursor-pointer select-none hover:z-30 hover:opacity-100'>
        <Image
          className='aspect-auto'
          fill={true}
          sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
          src='/images/almer-tampus-1.jpg'
          alt='almer tampus'
          placeholder='blur'
          blurDataURL='/images/almer-tampus-1.jpg'
        />
      </div>
    </div>
  );
};

export default Photo;
