// packages
import React from 'react';

// assets
import ArrowUpSVG from '@/assets/svg/arrow.svg';

const LinkExternal: React.FC<LinkExternalProps> = props => {
  const { href, title, name } = props;

  return (
    <a
      className='flex gap-1 w-fit text-neutral-300 text-sm underline hover:text-white transition-colors ease-in-out delay-100 select-none'
      href={href}
      title={title}
      target='_blank'
      rel='noopener noreferrer'
    >
      {name ? name : 'View Website'}
      <ArrowUpSVG width={10} height={10} />
    </a>
  );
};

export default LinkExternal;
