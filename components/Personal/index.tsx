// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';
import Card from './components/Card';

// helpers
import usePersonalStore from '@/store/personal';

const Personal: React.FC = (props) => {
	// store
	const { personal, dataHandler } = usePersonalStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetch('/api/v1/firebase/personal');
		const data = response.json();

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['personal'],
		queryFn: queryHandler,
		initialData: props,
		staleTime: 1000 * 5, // 10 minutes
		refetchInterval: 1000 * 5, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<ContentBox id='project'>
			<div className='mb-20'>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Personal</h3>
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

export default Personal;
