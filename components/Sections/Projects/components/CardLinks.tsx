// packages
import React from 'react';

// components
import LinkExternal from '@/components/common/LinkExternal';
import LinkDummy from '@/components/common/LinkDummy';

interface PCardLinks {
  link: string;
  codebase: string;
}

const CardLinks: React.FC<PCardLinks> = ({ link, codebase }) => {
  return (
    <div className='flex items-center gap-2'>
      {!!link ? (
        <LinkExternal href={link} title={link} />
      ) : (
        <LinkDummy name='Private Link' />
      )}
      {!!codebase ? (
        <LinkExternal href={codebase} title={codebase} name='View Codebase' />
      ) : (
        <LinkDummy name='Private Codebase' />
      )}
    </div>
  );
};

export default CardLinks;
