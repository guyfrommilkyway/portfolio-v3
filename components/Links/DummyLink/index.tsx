// packages
import React from 'react';

// assets
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';

const DummyLink: React.FC<DummyLinkProps> = props => {
  const { name } = props;

  return (
    <span className='flex gap-1 w-fit text-neutral-300 underline hover:text-white select-none'>
      {name}
      <ArrowUpSVG width={10} height={10} />
    </span>
  );
};

export default DummyLink;
