// packages
import React from 'react';
import Image from 'next/image';

interface PCardImage {
  name: string;
  image: string;
}

const CardImage: React.FC<PCardImage> = ({ name, image }) => {
  return (
    <div className='relative w-full max-w-full md:max-w-[280px] md:min-w-[280px] xl:max-w-[140px] xl:min-w-[140px] aspect-video rounded-md overflow-hidden select-none transition-opacity ease-in-out delay-100'>
      <Image
        src={image}
        fill={true}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        alt={name}
      />
    </div>
  );
};

export default CardImage;
