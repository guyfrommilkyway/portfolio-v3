// packages
import React from 'react';

// assets
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const CardHeader: React.FC<InformationCardHeaderProps> = props => {
  const { title, href } = props;

  return (
    <h1 className='w-fit text-neutral-300 text-sm font-semibold leading-snug tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
      {href ? (
        <a
          className='w-fit select-none'
          href={href}
          title={title}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}{' '}
          <FaArrowUpRightFromSquare className='inline ml-1 -mt-2' size={9} />
        </a>
      ) : (
        <span>{title}</span>
      )}
    </h1>
  );
};

export default CardHeader;
