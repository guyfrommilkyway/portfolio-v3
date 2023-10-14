// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import Card from '@/components/Card';
import LoadingBox from '@/components/LoadingBox';
import ShowMoreButton from './ShowMoreButton';
import NewsCard from './NewsCard';
import useRecentNewsStore from '@/store/recent-news';

const RecentNews: React.FC = () => {
  const { recentnews, dataHandler } = useRecentNewsStore(state => state);

  // query handler
  const queryHandler = async () => {
    // api
    const response = await fetch('api/v1/firebase/recent-news');
    const data = await response.json();
    dataHandler(data);

    return data;
  };

  // query
  const { data, isLoading } = useQuery({
    queryKey: ['recentnews'],
    queryFn: queryHandler,
    placeholderData: recentnews,
    staleTime: 1000 * 30, // 30 seconds
    refetchInterval: 1000 * 30, // 30 seconds
    refetchIntervalInBackground: true,
  });

  return (
    <Card>
      <h6 className='mx-4 mb-2 text-white text-lg font-semibold'>
        Recent News
      </h6>
      <div className='flex flex-col mb-2 text-neutral-300'>
        {isLoading && <LoadingBox />}
        {!isLoading &&
          !!data &&
          Object.keys(data)
            .sort()
            .reverse()
            .slice(0, 3)
            .map(item => {
              return <NewsCard key={item} item={data[item]} />;
            })}
      </div>
      {!isLoading && !!data && Object.keys(data).length > 5 && (
        <ShowMoreButton />
      )}
    </Card>
  );
};

export default RecentNews;
