// packages
import React from 'react';

// components
import CardUI from '@/components/UI/CardUI';
import CardImage from '../../Projects/components/CardImage';
import Pill from '@/components/Pill';

const CertificationsCard: React.FC<CertificationsCardProps> = props => {
  const { name, organization, issued, link, technologies, image } = props;

  return (
    <div className='flex flex-col md:flex-row justify-start items-start gap-8 w-full max-w-full md:max-w-[calc(50%-10px)] lg:max-w-full xl:max-w-[calc(33.33%-14.03px)]'>
      <CardUI height='h-full'>
        <a
          href={link}
          title={organization}
          target='_blank'
          rel='noopener noreferrer'
        >
          <CardImage name={organization} image={image} />
          <div className='p-4'>
            <h2 className='text-white font-semibold leading-tight select-none'>
              {name}
            </h2>
            <p className='text-neutral-300 select-none'>Issued on {issued}</p>
            <div className='flex flex-wrap items-center gap-2'>
              {!!technologies &&
                Object.keys(technologies).map(item => {
                  return <Pill key={item} tech={technologies[item]} />;
                })}
            </div>
          </div>
        </a>
      </CardUI>
    </div>
  );
};

export default CertificationsCard;
