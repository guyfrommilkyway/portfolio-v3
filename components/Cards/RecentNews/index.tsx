// packages
import React from 'react';

// components
import CardTag from '@/components/common/Card/CardTag';

import CardDescription from '@/components/common/Card/CardDescription';

const RecentNews: React.FC<IRecentNews> = props => {
  const { description, tag } = props;

  return (
    <div className='flex flex-col gap-1'>
      <CardTag tag={tag} />
      <CardDescription description={description} />
    </div>
  );
};

export default RecentNews;
