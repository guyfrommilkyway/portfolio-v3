// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ShowMore from '@/components/ShowMore';
import NewsCard from '@/components/NewsCard';

// helpers
import useWhatsNewStore from '@/store/whats-new';

const WhatsNew: React.FC = (props) => {
	// store
	const { whatsnew, dataHandler } = useWhatsNewStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetch('/api/v1/firebase/whats-new');
		const data = response.json();

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['whatsnew'],
		queryFn: queryHandler,
		initialData: props,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<div className='w-full py-4 bg-neutral-900 rounded-3xl'>
			<span className='block mx-4 mb-2 text-white text-lg font-semibold'>What&apos;s New</span>
			<div className='flex flex-col mb-2 text-neutral-300'>
				{!isLoading &&
					Object.keys(data)
						.sort()
						.reverse()
						.slice(0, 5)
						.map((item) => {
							return <NewsCard key={item} {...data[item]} />;
						})}
			</div>
			{Object.keys(data).length > 5 && <ShowMore />}
		</div>
	);
};

export default WhatsNew;
