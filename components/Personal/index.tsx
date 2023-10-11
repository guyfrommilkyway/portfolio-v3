// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';
import LoadingBox from '@/components/LoadingBox';
import Card from './components/Card';

// helpers
import usePersonalStore from '@/store/personal';

// utils
import fetchFirebase from '@/services/firebase';

const Personal: React.FC = () => {
	// store
	const { personal, dataHandler } = usePersonalStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetchFirebase('personal');

		// save to store
		dataHandler(response);

		return response;
	};

	// query
	const { isLoading } = useQuery({
		queryKey: ['personal'],
		queryFn: queryHandler,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<ContentBox id='project'>
			<div className='mb-20'>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Personal</h3>
				<div className='flex flex-col gap-5'>
					{isLoading && <LoadingBox />}
					{!isLoading &&
						Object.keys(personal)
							.sort()
							.reverse()
							.map((item) => {
								return <Card key={item} {...personal[item]} />;
							})}
				</div>
			</div>
		</ContentBox>
	);
};

export default Personal;
