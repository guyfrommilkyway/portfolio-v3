// packages
import React from 'react';

// components
import LinkExternal from '@/components/LinkExternal';
import LinkDummy from '@/components/LinkDummy';

const CardLinks: React.FC<ProjectCardLinksProps> = props => {
  const { link, codebase } = props;

  return (
    <div className='flex items-center gap-2 mb-4'>
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
