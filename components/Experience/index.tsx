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
		const data = await response.json();

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['experience'],
		queryFn: queryHandler,
		initialData: Object.keys(experience).length > 0 ? experience : props,
		staleTime: 1000 * 60 * 1, // 1 minute
		refetchInterval: 1000 * 60 * 1, // 1 minute
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
