// packages
import React from 'react';

// assets
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const CardHeader: React.FC<ProjectCardHeader> = props => {
  const { link, name } = props;

  return (
    <h2 className='inline-block w-fit mb-2 text-neutral-300 text-lg font-semibold leading-tight tracking-wide hover:text-white transition-colors ease-in-out delay-100 select-none'>
      {link ? (
        <a
          className='w-fit select-none'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {name}{' '}
          <FaArrowUpRightFromSquare className='inline ml-1 -mt-3' size={10} />
        </a>
      ) : (
        <span>{name}</span>
      )}
    </h2>
  );
};

export default CardHeader;
