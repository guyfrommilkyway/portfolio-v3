// packages
import React from 'react';
import Image from 'next/image';

const CardImage: React.FC<IProjectCardImage> = props => {
  const { name, image } = props;

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
