// packages
import React from 'react';

// assets
import ArrowUpSVG from '@/assets/svg/arrow.svg';

const CardHeader: React.FC<InformationCardHeaderProps> = props => {
  const { title, href } = props;

  return (
    <>
      {href ? (
        <a
          className='inline-block w-fit text-neutral-300 text-sm font-semibold leading-tight hover:underline hover:text-white transition-colors ease-in-out delay-100 select-none'
          href={href}
          title={title}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}
        </a>
      ) : (
        <h2 className='text-neutral-300 text-sm font-semibold leading-tight select-none'>
          {title}
        </h2>
      )}
    </>
  );
};

export default CardHeader;
