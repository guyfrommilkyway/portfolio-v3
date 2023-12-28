// packages
import React from 'react';

// components
import CardHeader from './CardHeader';
import CardDuration from './CardDuration';

const Certification: React.FC<CertificationsCardProps> = props => {
  const { name, organization, issued, link } = props;

  return (
    <div className=''>
      <CardHeader title={name} href={link} />
      <CardDuration duration={`${organization} • ${issued}`} />
    </div>
  );
};

export default Certification;
