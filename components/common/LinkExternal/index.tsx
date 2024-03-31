// packages
import React from 'react';

// assets
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface PLinkExternal {
  title: string;
  href: string;
  name?: string;
}

const LinkExternal: React.FC<PLinkExternal> = ({ title, name, href }) => {
  return (
    <a
      className='flex gap-1 w-fit text-neutral-400 underline hover:text-white transition-colors ease-in-out delay-100 select-none'
      href={href}
      title={title}
      target='_blank'
      rel='noopener noreferrer'
    >
      {name ?? 'View Website'}
      <FaArrowUpRightFromSquare className='inline ml-1 mt-1' size={10} />
    </a>
  );
};

export default LinkExternal;
