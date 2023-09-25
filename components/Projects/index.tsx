// packages below
import React from 'react';

// components below
import Card from './components/Card';

// types below
import { ProjectsProps } from '@/types';

const Projects: React.FC<ProjectsProps> = (props) => {
	const { data, data2 } = props;

	return (
		<div className='project relative w-full mb-24 py-8'>
			<div className='mb-20'>
				<h6 className='mb-8 uppercase text-sm font-semibold'>WORK</h6>
				<div className='flex flex-col gap-8'>
					{data.map((item) => {
						return <Card key={item.name} {...item} />;
					})}
				</div>
			</div>
			<div className='mb-20'>
				<h6 className='mb-8 uppercase text-sm font-semibold'>Personal</h6>
				<div className='flex flex-col gap-8'>
					{data2.map((item) => {
						return <Card key={item.name} {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Projects;
