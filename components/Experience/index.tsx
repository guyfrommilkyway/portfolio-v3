// packages below
import React from 'react';

// components below
import Card from './components/Card';

// data below
import { ExperienceProps } from '@/types';

const Experience: React.FC<ExperienceProps> = (props) => {
	const { data } = props;

	return (
		<section className='experience relative w-full px-4 py-16 md:p-16 lg:px-20 border-b border-neutral-900'>
			<h3 className='mb-8 text-white text-2xl font-semibold'>Experience</h3>
			<div className='flex flex-col gap-8'>
				{data.map((item) => {
					return <Card key={item.link} {...item} />;
				})}
			</div>
		</section>
	);
};

export default Experience;
