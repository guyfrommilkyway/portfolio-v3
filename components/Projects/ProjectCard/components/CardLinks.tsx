// packages
import React from 'react';

// components
import OutsideLink from '@/components/Links/OutsideLink';
import DummyLink from '@/components/Links/DummyLink';

const CardLinks: React.FC<ProjectCardLinksProps> = props => {
  const { link, codebase } = props;

  return (
    <div className='flex items-center gap-4 mb-2'>
      {!!link ? (
        <OutsideLink href={link} title={link} />
      ) : (
        <DummyLink name='Link Unavailable' />
      )}
      {!!codebase ? (
        <OutsideLink href={codebase} title={codebase} name='View Codebase' />
      ) : (
        <DummyLink name='Private Codebase' />
      )}
    </div>
  );
};

export default CardLinks;
