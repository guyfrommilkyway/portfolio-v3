// packages
import React from 'react';

// components
import CardHeader from './CardHeader';
import CardDuration from './CardDuration';
import LinkExternal from '@/components/LinkExternal';

const Certification: React.FC<CertificationsCardProps> = props => {
  const { name, organization, issued, link } = props;

  return (
    <div className=''>
      <CardHeader title={name} />
      <CardDuration duration={`${organization} • ${issued}`} />
      <LinkExternal href={link} name='Verified Certificate' />
    </div>
  );
};

export default Certification;
