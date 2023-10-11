// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';
import LoadingBox from '@/components/LoadingBox';
import Card from './components/Card';

// helpers
import useWorkStore from '@/store/work';

// utils
import fetchFirebase from '@/services/firebase';

const Work: React.FC = () => {
	// store
	const { work, dataHandler } = useWorkStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetchFirebase('work');

		// save to store
		dataHandler(response);

		return response;
	};

	// query
	const { isLoading } = useQuery({
		queryKey: ['work'],
		queryFn: queryHandler,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<ContentBox id='project'>
			<div className='mb-20'>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Work</h3>
				<div className='flex flex-col gap-5'>
					{isLoading && <LoadingBox />}
					{!isLoading &&
						Object.keys(work)
							.sort()
							.reverse()
							.map((item) => {
								return <Card key={item} {...work[item]} />;
							})}
				</div>
			</div>
		</ContentBox>
	);
};

export default Work;
