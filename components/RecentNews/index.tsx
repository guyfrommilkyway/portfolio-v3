// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';

const RecentNews: React.FC = () => {
	return (
		<ContentBox id='whatsnew'>
			<h3 className='mb-4 text-white text-2xl font-semibold'>Recent News</h3>
			<ul className='list-inside list-disc text-neutral-300'>
				<li>
					<span className='underline'>portfolio-v3</span>: Deployed initial version with Vercel
				</li>
				<li>
					<span className='underline'>react-notes</span>: Deployed initial version with Netlify
				</li>
				<li>
					Completed{' '}
					<a
						className='underline'
						href='https://www.coursera.org/account/accomplishments/specialization/certificate/PJVHC29TZQ4R'
						target='_blank'
					>
						Meta Front-End Developer Professional Certificate
					</a>
				</li>
				<li>
					Completed{' '}
					<a
						className='underline'
						href='https://www.coursera.org/account/accomplishments/specialization/certificate/YXP7RPKU4TQ7'
						target='_blank'
					>
						Software Development Lifecycle Specialization
					</a>
				</li>
				<li>Finished playing Subnautica: Below Zero</li>
				<li>Finished playing with Subnautica</li>
				<li>Finished playing with Shadow Tactics: Blades of the Shogun - Aiko&apos;s Choice</li>
				<li>
					Completed{' '}
					<a
						className='underline'
						href='https://www.udemy.com/certificate/UC-6ce313e3-1cc6-4b42-be94-775021c97137/'
						target='_blank'
					>
						Understanding Typescript
					</a>
				</li>
				<li>
					Completed{' '}
					<a
						className='underline'
						href='https://www.udemy.com/certificate/UC-cde42411-355e-4634-8762-90e171fb3d39/'
						target='_blank'
					>
						Clean Code
					</a>
				</li>
				<li>
					Completed{' '}
					<a
						className='underline'
						href='https://www.udemy.com/certificate/UC-d9845202-08ed-45dd-909c-1b6ed869faca/'
						target='_blank'
					>
						Next.js & React - The Complete Guide
					</a>
				</li>
				<li>
					Completed{' '}
					<a
						className='underline'
						href='https://www.udemy.com/certificate/UC-c15b03b8-70c0-4db4-9bcb-afc89720d4a1/'
						target='_blank'
					>
						React - The Complete Guide
					</a>
				</li>
			</ul>
		</ContentBox>
	);
};

export default RecentNews;
