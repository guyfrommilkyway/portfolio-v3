// packages below
import React from 'react';

// types below
import { AboutProps } from '@/types';

const About: React.FC<AboutProps> = (props) => {
	const { data } = props;

	return (
		<section className='about relative w-full px-4 py-16 md:p-16 lg:px-20 border-b border-neutral-900'>
			<h6 className='mb-4 text-sm underline tracking-wide uppercase text-neutral-300 font-semibold'>
				Short Biography
			</h6>
			<h1 className='mb-4 text-neutral-100 font-bold text-4xl tracking-wide leading-normal'>
				{data.headline}
			</h1>
			{data.paragraphs.map((item, index) => {
				return (
					<p key={index} className='mb-4 text-lg leading-relaxed text-neutral-300'>
						{item}
					</p>
				);
			})}
		</section>
	);
};

export default About;
