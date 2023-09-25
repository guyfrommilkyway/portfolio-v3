// packages below
import React from 'react';

// components below
import Card from './components/Card';

// data below
import { work } from '@/data/work';
import { personal } from '@/data/personal';

const Projects: React.FC = () => {
	return (
		<div className='project relative w-full mb-24 py-8'>
			<div className='mb-20'>
				<h6 className='mb-8 uppercase text-sm font-semibold'>WORK</h6>
				<div className='flex flex-col gap-8'>
					{work.map((item) => {
						return <Card key={item.name} {...item} />;
					})}
				</div>
			</div>
			<div className='mb-20'>
				<h6 className='mb-8 uppercase text-sm font-semibold'>Personal</h6>
				<div className='flex flex-col gap-8'>
					{personal.map((item) => {
						return <Card key={item.name} {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Projects;
