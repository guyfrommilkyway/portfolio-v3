// packages
import React, { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';
import LoadingBox from '@/components/LoadingBox';

// helpers
import useAboutStore from '@/store/about';

// utils
import fetchFirebase from '@/services/firebase';

const About: React.FC = () => {
	// store
	const { about, dataHandler } = useAboutStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const data = await fetchFirebase('biography');

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { isLoading } = useQuery({
		queryKey: ['about'],
		queryFn: queryHandler,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	// copy-paste handler
	const copyPasteHandler = () => {
		navigator.clipboard.writeText('almerflorestampus@gmail.com');
	};

	return (
		<ContentBox id='about'>
			<h3 className='mb-4 text-white text-2xl font-semibold'>Biography</h3>
			{isLoading && <LoadingBox />}
			{!isLoading && Object.keys(about).length !== 0 && (
				<Fragment>
					<h4 className='mb-4 text-neutral-100 font-bold text-xl tracking-wide leading-normal'>
						{about.subheadline}
					</h4>
					{Object.keys(about.paragraphs).map((item) => {
						return (
							<p key={item} className='mb-4 leading-relaxed text-neutral-300'>
								{about.paragraphs[item]}
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
				</Fragment>
			)}
		</ContentBox>
	);
};

export default About;
