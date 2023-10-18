// packages
import React from 'react';

// components
import WhatsNewCard from './components/WhatsNewCard';
import RecentNewsCard from './components/RecentNewsCard';

const News: React.FC = () => {
  return (
    <aside className='hidden lg:flex sticky top-[80px] flex-col gap-4 w-full max-w-[320px] h-fit p-4 px-4'>
      <WhatsNewCard />
      <RecentNewsCard />
    </aside>
  );
};

export default News;
