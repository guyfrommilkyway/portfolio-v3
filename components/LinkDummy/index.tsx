// packages
import React from 'react';

// assets
import ArrowUpSVG from '@/assets/svg/arrow.svg';

const LinkDummy: React.FC<LinkDummyProps> = props => {
  const { name } = props;

  return (
    <span className='flex gap-1 w-fit text-neutral-300 text-sm underline hover:text-white select-none transition-colors ease-in-out delay-100'>
      {name}
      <ArrowUpSVG width={10} height={10} />
    </span>
  );
};

export default LinkDummy;
