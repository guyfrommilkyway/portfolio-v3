// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';
import Card from './components/Card';

// types
import { ProjectsProps } from '@/types';

const Projects: React.FC<ProjectsProps> = (props) => {
	const { work, personal } = props;

	return (
		<ContentBox id='project'>
			<div className='mb-20'>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Work</h3>
				<div className='flex flex-col gap-8'>
					{Object.keys(work).map((item) => {
						return <Card key={item} {...work[item]} />;
					})}
				</div>
			</div>
			<div className='mb-20'>
				<h3 className='mb-8 text-white text-2xl font-semibold'>Personal</h3>
				<div className='flex flex-col gap-8'>
					{Object.keys(personal).map((item) => {
						return <Card key={item} {...personal[item]} />;
					})}
				</div>
			</div>
		</ContentBox>
	);
};

export default Projects;
