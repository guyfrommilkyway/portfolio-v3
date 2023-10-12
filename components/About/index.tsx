// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';

// utils
import { toastSuccess } from '@/utils/notifications';

const About: React.FC<AboutProps> = (props) => {
	const { headline, subheadline, paragraphs } = props;

	// copy-paste handler
	const copyPasteHandler = () => {
		navigator.clipboard.writeText('almerflorestampus@gmail.com');
		toastSuccess('Copied to clipboard');
	};

	return (
		<ContentBox id='about'>
			<h3 className='mb-4 text-white text-2xl font-semibold'>{headline}</h3>
			<h4 className='mb-4 text-neutral-100 font-bold text-xl tracking-wide leading-normal'>
				{subheadline}
			</h4>
			{!!paragraphs &&
				Object.keys(paragraphs).map((item) => {
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
					onClick={copyPasteHandler}
				>
					almerflorestampus@gmail.com
				</span>
				.
			</p>
		</ContentBox>
	);
};

export default About;
