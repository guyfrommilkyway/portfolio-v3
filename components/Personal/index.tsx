// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';
import ProjectCard from '@/components/ProjectCard';

// helpers
import usePersonalStore from '@/store/personal';

const Personal: React.FC = (props) => {
	// store
	const { personal, dataHandler } = usePersonalStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetch('/api/v1/firebase/personal');
		const data = await response.json();

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['personal'],
		queryFn: queryHandler,
		initialData: Object.keys(personal).length > 0 ? personal : props,
		staleTime: 1000 * 60 * 1, // 1 minute
		refetchInterval: 1000 * 60 * 1, // 1 minute
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
								return <ProjectCard key={item} {...data[item]} />;
							})}
				</div>
			</div>
		</ContentBox>
	);
};

export default Personal;
