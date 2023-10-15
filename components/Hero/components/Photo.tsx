// packages
import React, { useState } from 'react';
import Image from 'next/image';

const Photo: React.FC = () => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <div className='relative z-0 mb-20'>
      <div
        className={`relative w-[240px] h-[320px] rounded-sm overflow-hidden transition-all ease-in-out delay-100 cursor-pointer hover:z-30 hover:opacity-100 ${
          selected === 1 ? 'z-10 opacity-100' : '-z-10 opacity-50'
        }`}
        onClick={() => setSelected(1)}
      >
        <Image
          className='aspect-auto'
          priority
          fill={true}
          sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
          src='/images/me.jpg'
          alt='almer-tampus.jpg'
        />
      </div>
      <div
        className={`absolute left-10 top-10 -z-10 w-[240px] h-[320px] rounded-sm overflow-hidden transition-all ease-in-out delay-100 cursor-pointer hover:z-30 hover:opacity-100 ${
          selected === 2 ? 'z-10 opacity-100' : '-z-10 opacity-50'
        }`}
        onClick={() => setSelected(2)}
      >
        <Image
          className='aspect-auto'
          priority
          fill={true}
          sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
          src='/images/me_2.jpg'
          alt='almer-tampus.jpg'
        />
      </div>
    </div>
  );
};

export default Photo;
