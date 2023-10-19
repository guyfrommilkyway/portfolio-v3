// packages
import React from 'react';

// components
import CardUI from '@/components/UI/CardUI';
import LinkExternal from '@/components/LinkExternal';
import Pill from '@/components/Pill';

const CertificationsCard: React.FC<CertificationsCardProps> = props => {
  const { name, organization, issued, link, technologies } = props;

  return (
    <div className='flex flex-col md:flex-row justify-start items-start gap-8 w-full max-w-full md:max-w-[calc(50%-10px)] lg:max-w-full xl:max-w-[calc(50%-10px)]'>
      <CardUI height='h-full'>
        <div className='p-4'>
          <h2 className='text-white text-lg font-semibold select-none'>
            {name}
          </h2>
          <h3 className='text-neutral-300 select-none'>{organization}</h3>
          <p className='text-neutral-300 select-none'>Issued on {issued}</p>
          <LinkExternal href={link} name='View Credential' />
          <div className='flex flex-wrap items-center gap-2'>
            {!!technologies &&
              Object.keys(technologies).map(item => {
                return <Pill key={item} tech={technologies[item]} />;
              })}
          </div>
        </div>
      </CardUI>
    </div>
  );
};

export default CertificationsCard;
