// packages
import React from 'react';

const CardHeader: React.FC<InformationCardHeaderProps> = props => {
  const { title, href } = props;

  return (
    <>
      {href ? (
        <a
          className='inline-block w-fit text-neutral-300 text-sm font-semibold leading-normal tracking-wide underline hover:text-white transition-colors ease-in-out delay-100 select-none'
          href={href}
          title={title}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}
        </a>
      ) : (
        <span className='text-neutral-300 text-sm font-semibold leadi select-none'>
          {title}
        </span>
      )}
    </>
  );
};

export default CardHeader;
