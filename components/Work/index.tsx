// packages
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';
import ProjectCard from '@/components/ProjectCard';

// helpers
import useWorkStore from '@/store/work';

const Work: React.FC = (props) => {
	// store
	const { work, dataHandler } = useWorkStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetch('/api/v1/firebase/work');
		const data = await response.json();

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['work'],
		queryFn: queryHandler,
		initialData: Object.keys(work).length > 0 ? work : props,
		staleTime: 1000 * 60 * 1, // 1 minute
		refetchInterval: 1000 * 60 * 1, // 1 minute
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
								return <ProjectCard key={item} {...data[item]} />;
							})}
				</div>
			</div>
		</ContentBox>
	);
};

export default Work;
