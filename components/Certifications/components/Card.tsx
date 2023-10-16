// packages
import React from 'react';

// components
import Card from '@/components/Card';
import OutsideLink from '@/components/Links/OutsideLink';

const CertificationsCard: React.FC<CertificationsCardProps> = props => {
  const { name, organization, issued, link } = props;

  return (
    <div className='flex flex-col md:flex-row justify-start items-start gap-8 w-full max-w-full md:max-w-[calc(50%-10px)] lg:max-w-full xl:max-w-[calc(50%-10px)]'>
      <Card height='h-full'>
        <div className='px-4'>
          <h2 className='text-white text-lg font-semibold select-none'>
            {name}
          </h2>
          <h3 className='mb-2 text-neutral-300 text-lg select-none'>
            {organization}
          </h3>
          <p className='w-fit mb-2 text-sm text-neutral-300 uppercase leading-none tracking-tighter select-none'>
            {issued}
          </p>
          <OutsideLink href={link} name='View Credential' />
        </div>
      </Card>
    </div>
  );
};

export default CertificationsCard;
