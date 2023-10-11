// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';
import Card from './components/Card';

// helpers
import useWorkStore from '@/store/work';

// utils
import fetchFirebase from '@/services/firebase';

const Work: React.FC = (props) => {
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
	const { data, isLoading } = useQuery({
		queryKey: ['work'],
		queryFn: queryHandler,
		initialData: props,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<ContentBox id='project'>
			<div className='mb-20'>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Work</h3>
				<div className='flex flex-col gap-5'>
					{!isLoading &&
						Object.keys(data)
							.sort()
							.reverse()
							.map((item) => {
								return <Card key={item} {...data[item]} />;
							})}
				</div>
			</div>
		</ContentBox>
	);
};

export default Work;
