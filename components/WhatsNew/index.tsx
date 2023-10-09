// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';

const WhatsNew: React.FC = () => {
	return (
		<ContentBox id='whatsnew'>
			<h3 className='mb-4 text-white text-2xl font-semibold'>What&apos;s New</h3>
			<ul className='list-inside list-disc text-neutral-300'>
				<li>Mastering React + Redux + TypeScript + Tailwind</li>
				<li>Studying Python, SQL, Django, API design and database design</li>
				<li>Studying React Design Patterns, Best Practices and Clean Code</li>
				<li>
					<a
						className='underline transition ease-in-out delay-100 hover:text-white'
						href='https://github.com/guyfrommilkyway/portfolio-v3'
						target='_blank'
					>
						portfolio-v3
					</a>
					: Integrating Firebase Realtime Database and other third-party APIs (GitHub API, Spotify
					API, etc.)
				</li>
				<li>
					<a
						className='underline transition ease-in-out delay-100 hover:text-white'
						href='https://github.com/guyfrommilkyway/react-notes'
						target='_blank'
					>
						react-notes
					</a>
					: Integrating Auth0, developing more features, functionalities, and design improvements
				</li>
				<li>
					Currently pursuing the following courses on Coursera:
					<ul className='pl-8 list-inside list-disc text-neutral-300'>
						<li>Meta Back-End Developer Professional Certificate</li>
						<li>Google UX Design Professional Certificate</li>
						<li>IBM DevOps and Software Engineering Professional Certificate</li>
					</ul>
				</li>
			</ul>
		</ContentBox>
	);
};

export default WhatsNew;
