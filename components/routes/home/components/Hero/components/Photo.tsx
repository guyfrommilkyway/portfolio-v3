// packages
import React from 'react';
import Image from 'next/image';

const HeroPhoto: React.FC = () => {
  return (
    <div className='mb-10 select-none'>
      <div className='relative w-full rounded-2xl overflow-hidden transition-all ease-in-out delay-100 cursor-pointer select-none hover:z-30 hover:opacity-100'>
        <Image
          className='aspect-auto'
          layout='responsive'
          width={240}
          height={320}
          src='/images/almer-tampus-1.jpg'
          alt='almer tampus'
          placeholder='blur'
          blurDataURL='/images/almer-tampus-1.jpg'
        />
      </div>
    </div>
  );
};

export default HeroPhoto;
