// packages
import React, { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';
import Card from './components/Card';

// helpers
import useExperienceStore from '@/store/experience';

const Experience: React.FC = (props) => {
	// store
	const { experience, dataHandler } = useExperienceStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetch('/api/v1/firebase/experience');
		const data = response.json();

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['experience'],
		queryFn: queryHandler,
		initialData: props,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<ContentBox id='experience'>
			<Fragment>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Experience</h3>
				<div className='flex flex-col gap-8'>
					{!isLoading &&
						Object.keys(data)
							.sort()
							.reverse()
							.map((item) => {
								return <Card key={item} {...data[item]} />;
							})}
				</div>
			</Fragment>
		</ContentBox>
	);
};

export default Experience;
