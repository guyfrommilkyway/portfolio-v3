// packages
import React, { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';
import LoadingBox from '@/components/LoadingBox';
import Card from './components/Card';

// helpers
import useExperienceStore from '@/store/experience';

// utils
import fetchFirebase from '@/services/firebase';

const Experience: React.FC = () => {
	// store
	const { experience, dataHandler } = useExperienceStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const data = await fetchFirebase('experience');

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { isLoading } = useQuery({
		queryKey: ['experience'],
		queryFn: queryHandler,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<ContentBox id='experience'>
			<Fragment>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Experience</h3>
				<div className='flex flex-col gap-8'>
					{isLoading && <LoadingBox />}
					{!isLoading &&
						Object.keys(experience)
							.sort()
							.reverse()
							.map((item) => {
								return <Card key={item} {...experience[item]} />;
							})}
				</div>
			</Fragment>
		</ContentBox>
	);
};

export default Experience;
