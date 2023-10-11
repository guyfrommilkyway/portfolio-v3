// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ShowMore from '@/components/ShowMore';

// helpers
import useRecentNewsStore from '@/store/recent-news';

// utils
import fetchFirebase from '@/services/firebase';

const RecentNews: React.FC = (props) => {
	// store
	const { recentnews, dataHandler } = useRecentNewsStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetchFirebase('recentnews');

		// save to store
		dataHandler(response);

		return response;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['recentnews'],
		queryFn: queryHandler,
		initialData: props,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<div className='py-4 border-b border-neutral-900'>
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
