// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import LoadingBox from '@/components/LoadingBox';
import ShowMore from '@/components/ShowMore';
import NewsCard from '@/components/NewsCard';

const RecentNews: React.FC = () => {
	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetch('api/v1/firebase/recent-news');
		const data = await response.json();

		return data;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['recentnews'],
		queryFn: queryHandler,
		staleTime: 1000 * 60 * 1, // 1 minute
		refetchInterval: 1000 * 60 * 1, // 1 minute
		refetchIntervalInBackground: true,
	});

	return (
		<div className='py-4 bg-neutral-900 rounded-3xl'>
			<p className='mx-4 mb-2 text-white text-lg font-semibold'>Recent News</p>
			<div className='flex flex-col mb-2 text-neutral-300'>
				{isLoading && <LoadingBox />}
				{!isLoading &&
					!!data &&
					Object.keys(data)
						.sort()
						.reverse()
						.slice(0, 3)
						.map((item) => {
							return <NewsCard key={item} item={data[item]} />;
						})}
			</div>
			{!isLoading && !!data && Object.keys(data).length > 5 && <ShowMore />}
		</div>
	);
};

export default RecentNews;
