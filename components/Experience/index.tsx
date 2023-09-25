// packages below
import React from 'react';

// components below
import Card from './components/Card';

// data below
import { ExperienceProps } from '@/types';

const Experience: React.FC<ExperienceProps> = (props) => {
	const { data } = props;

	return (
		<div className='experience relative w-full mb-24 py-8'>
			<div className='flex flex-col gap-8'>
				{data.map((item) => {
					return <Card key={item.link} {...item} />;
				})}
			</div>
		</div>
	);
};

export default Experience;