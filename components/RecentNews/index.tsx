// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ShowMore from '@/components/ShowMore';

// helpers
import useRecentNewsStore from '@/store/recent-news';

const RecentNews: React.FC = (props) => {
	// store
	const { recentnews, dataHandler } = useRecentNewsStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetch('/api/v1/firebase/recent-news');
		const data = response.json();

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['recentnews'],
		queryFn: queryHandler,
		initialData: props,
		staleTime: 1000 * 5, // 10 minutes
		refetchInterval: 1000 * 5, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<div className='py-4 bg-neutral-900 rounded-3xl'>
			<span className='block mx-4 mb-2 text-white text-lg font-semibold'>Recent News</span>
			<div className='flex flex-col mb-2 text-neutral-300'>
				{!isLoading &&
					Object.keys(data)
						.sort()
						.reverse()
						.slice(0, 5)
						.map((item) => {
							return (
								<div
									key={item}
									className='px-4 py-2 transition ease-in-out delay-100 hover:bg-neutral-900 cursor-pointer'
								>
									{data[item]}
								</div>
							);
						})}
			</div>
			<ShowMore />
		</div>
	);
};

export default RecentNews;
