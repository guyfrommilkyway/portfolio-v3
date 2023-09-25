// packages below
import React from 'react';

// types below
import { AboutProps } from '@/types';

const About: React.FC<AboutProps> = (props) => {
	const { data } = props;

	return (
		<div className='about relative w-full mb-24 py-8'>
			<h1 className='mb-4 font-bold text-4xl leading-normal'>{data.headline}</h1>
			{data.paragraphs.map((item, index) => {
				return (
					<p key={index} className='mb-4 text-lg leading-relaxed text-neutral-700'>
						{item}
					</p>
				);
			})}
		</div>
	);
};

export default About;
