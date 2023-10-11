// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';

// types
import { AboutProps } from '@/types';

const About: React.FC<AboutProps> = (props) => {
	const { headline, subheadline, paragraphs } = props;

	const copyHandler = () => {
		navigator.clipboard.writeText('almerflorestampus@gmail.com');
	};

	return (
		<ContentBox id='about'>
			<h3 className='mb-4 text-white text-2xl font-semibold'>{headline}</h3>
			<h4 className='mb-4 text-neutral-100 font-bold text-xl tracking-wide leading-normal'>
				{subheadline}
			</h4>
			{Object.keys(paragraphs).map((item) => {
				return (
					<p key={item} className='mb-4 leading-relaxed text-neutral-300'>
						{paragraphs[item]}
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
