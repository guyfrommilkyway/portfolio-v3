// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import LoadingBox from '@/components/LoadingBox';
import ShowMore from '@/components/ShowMore';

// helpers
import useWhatsNewStore from '@/store/whats-new';

// utils
import fetchFirebase from '@/services/firebase';

const WhatsNew: React.FC = () => {
	// store
	const { whatsnew, dataHandler } = useWhatsNewStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetchFirebase('whatsnew');

		// save to store
		dataHandler(response);

		return response;
	};

	// query
	const { isLoading } = useQuery({
		queryKey: ['whatsnew'],
		queryFn: queryHandler,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<div className='w-full py-4 border-b border-neutral-900'>
			<span className='block mx-4 mb-2 text-white text-lg font-semibold'>What&apos;s New</span>
			<div className='flex flex-col mb-2 text-neutral-300'>
				{isLoading && <LoadingBox />}
				{!isLoading &&
					Object.keys(whatsnew)
						.sort()
						.reverse()
						.slice(0, 5)
						.map((item) => {
							return (
								<div
									key={item}
									className='px-4 py-2 transition ease-in-out delay-100 hover:bg-neutral-900 cursor-pointer'
								>
									{whatsnew[item]}
								</div>
							);
						})}
			</div>
			<ShowMore />
		</div>
	);
};

export default WhatsNew;
