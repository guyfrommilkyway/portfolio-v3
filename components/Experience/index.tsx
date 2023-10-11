// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';
import Card from './components/Card';

// types
import { ExperienceProps } from '@/types';

const Experience: React.FC<ExperienceProps> = (props) => {
	const { data } = props;

	return (
		<ContentBox id='experience'>
			<h3 className='mb-8 text-white text-2xl font-semibold'>Experience</h3>
			<div className='flex flex-col gap-8'>
				{Object.keys(data).map((item) => {
					return <Card key={item} {...data[item]} />;
				})}
			</div>
		</ContentBox>
	);
};

export default Experience;
