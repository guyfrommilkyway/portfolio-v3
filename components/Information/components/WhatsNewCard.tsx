// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import CardUI from '@/components/UI/CardUI';
import LoadingBox from '@/components/LoadingBox';
import ShowMore from './ShowMore';
import NewsCard from './NewsItem';

const WhatsNewCard: React.FC = () => {
  // query handler
  const queryHandler = async () => {
    // api
    const response = await fetch('api/v1/firebase/whats-new');
    const data = await response.json();

    return data;
  };

  // query
  const { data, isLoading } = useQuery({
    queryKey: ['whatsnew'],
    queryFn: queryHandler,
    staleTime: 1000 * 60 * 1, // 1 minute
    refetchInterval: 1000 * 60 * 1, // 1 minute
    refetchIntervalInBackground: true,
  });

  return (
    <CardUI>
      <div className='py-4'>
        <h1 className='mx-4 mb-2 text-white text-lg font-semibold select-none'>
          What&apos;s New
        </h1>
        <div className='flex flex-col mb-2 text-neutral-300'>
          {isLoading && <LoadingBox />}
          {!isLoading &&
            !!data &&
            Object.keys(data)
              .sort()
              .reverse()
              .slice(0, 4)
              .map(item => {
                return <NewsCard key={item} {...data[item]} />;
              })}
        </div>
        {!isLoading && !!data && Object.keys(data).length > 5 && <ShowMore />}
      </div>
    </CardUI>
  );
};

export default WhatsNewCard;
