// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';
import ProjectCard from '@/components/ProjectCard';

const Personal: React.FC<ProjectsProps> = (props) => {
	const { data } = props;

	return (
		<ContentBox id='project'>
			<div className='mb-20'>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Personal</h3>
				<div className='flex flex-col gap-5'>
					{!!data &&
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
