// packages
import React from 'react';
import Image from 'next/image';

const CardImage: React.FC<ProjectCardImageProps> = props => {
  const { name, image } = props;

  return (
    <div className='relative aspect-video rounded-tl-2xl rounded-tr-2xl overflow-hidden select-none transition-opacity ease-in-out delay-100'>
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