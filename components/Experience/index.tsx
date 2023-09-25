// packages below
import React from 'react';

// components below
import Card from './components/Card';
import { experience } from '@/data/experience';

const Experience: React.FC = () => {
	return (
		<div className='experience relative w-full mb-24 py-8'>
			<div className='flex flex-col gap-8'>
				{experience.map((item) => {
					return <Card key={item.link} {...item} />;
				})}
			</div>
		</div>
	);
};

export default Experience;
