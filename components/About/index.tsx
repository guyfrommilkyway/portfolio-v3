// packages below
import React from 'react';

// types below
import { AboutProps } from '@/types';

const About: React.FC<AboutProps> = (props) => {
	const { data } = props;

	return (
		<div className='about relative w-full mb-24 py-8'>
			<h6 className='mb-4 text-sm underline tracking-wide uppercase text-white font-semibold'>
				Short Biography
			</h6>
			<h1 className='mb-4 text-neutral-100 font-bold text-4xl tracking-wide leading-normal'>
				{data.headline}
			</h1>
			{data.paragraphs.map((item, index) => {
				return (
					<p key={index} className='mb-4 text-lg leading-relaxed text-neutral-100'>
						{item}
					</p>
				);
			})}
		</div>
	);
};

export default About;
