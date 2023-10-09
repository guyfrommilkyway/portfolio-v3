// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';
import Card from './components/Card';

// types
import { ProjectsProps } from '@/types';

const Projects: React.FC<ProjectsProps> = (props) => {
	const { data, data2 } = props;

	return (
		<ContentBox id='project'>
			<div className='mb-20'>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Work</h3>
				<div className='flex flex-col gap-8'>
					{data.map((item) => {
						return <Card key={item.name} {...item} />;
					})}
				</div>
			</div>
			<div className='mb-20'>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Personal</h3>
				<div className='flex flex-col gap-8'>
					{data2.map((item) => {
						return <Card key={item.name} {...item} />;
					})}
				</div>
			</div>
		</ContentBox>
	);
};

export default Projects;
