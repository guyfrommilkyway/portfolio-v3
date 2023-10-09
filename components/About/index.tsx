// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';

// types
import { AboutProps } from '@/types';

const About: React.FC<AboutProps> = (props) => {
	const { data } = props;

	const copyHandler = () => {
		navigator.clipboard.writeText('almerflorestampus@gmail.com');
	};

	return (
		<ContentBox id='about'>
			<h3 className='mb-4 text-white text-2xl font-semibold'>Short Biography</h3>
			<h4 className='mb-4 text-neutral-100 font-bold text-xl tracking-wide leading-normal'>
				{data.headline}
			</h4>
			{data.paragraphs.map((item, index) => {
				return (
					<p key={index} className='mb-4 leading-relaxed text-neutral-300'>
						{item}
					</p>
				);
			})}
			<p className='mb-4 leading-relaxed text-neutral-300'>
				You can reach me at{' '}
				<span
					className='text-neutral-300 underline hover:text-white cursor-copy'
					onClick={copyHandler}
				>
					almerflorestampus@gmail.com
				</span>
				.
			</p>
		</ContentBox>
	);
};

export default About;
