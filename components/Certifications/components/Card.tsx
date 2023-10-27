// packages
import React from 'react';

// components
import Pill from '@/components/Pill';
import LinkExternal from '@/components/LinkExternal';

// assets
import { MdCalendarMonth } from 'react-icons/md';

const CertificationsCard: React.FC<CertificationsCardProps> = props => {
  const { name, organization, issued, link, technologies } = props;

  return (
    <div className='flex flex-col w-full text-neutral-300 transition-colors ease-in-out delay-100 hover:text-white'>
      <h2 className='font-semibold leading-tight select-none'>{name}</h2>
      <p className='select-none'>
        {organization} • {issued}
      </p>
      <div className='flex flex-wrap items-center gap-2'>
        {!!technologies &&
          Object.keys(technologies).map(item => {
            return <Pill key={item} tech={technologies[item]} />;
          })}
      </div>
      <LinkExternal href={link} name='Verified Certificate' />
    </div>
  );
};

export default CertificationsCard;
