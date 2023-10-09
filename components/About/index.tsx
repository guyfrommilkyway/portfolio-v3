// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';

// types
import { AboutProps } from '@/types';

const About: React.FC<AboutProps> = (props) => {
	const { data } = props;

	return (
		<ContentBox id='about'>
			<h6 className='mb-4 text-sm underline tracking-wide uppercase text-neutral-300 font-semibold'>
				Short Biography
			</h6>
			<h1 className='mb-4 text-neutral-100 font-bold text-4xl tracking-wide leading-normal'>
				{data.headline}
			</h1>
			{data.paragraphs.map((item, index) => {
				return (
					<p key={index} className='mb-4 leading-relaxed text-neutral-300'>
						{item}
					</p>
				);
			})}
		</ContentBox>
	);
};

export default About;
