// packages
import React, { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import ContentBox from '@/components/ContentBox';

// helpers
import useAboutStore from '@/store/about';

// utils
import { toastSuccess } from '@/utils/notifications';

const About: React.FC = (props) => {
	// store
	const { about, dataHandler } = useAboutStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/firebase/biography`, {
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': 'https://almertampus.xyz',
				'Access-Control-Allow-Methods': 'GET',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
		});

		const data = response.json();

		// save to store
		dataHandler(data);

		return data;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['about'],
		queryFn: queryHandler,
		initialData: props,
		staleTime: 1000 * 5, // 10 minutes
		refetchInterval: 1000 * 5, // 10 minutes
		refetchIntervalInBackground: true,
	});

	// copy-paste handler
	const copyPasteHandler = () => {
		navigator.clipboard.writeText('almerflorestampus@gmail.com');
		toastSuccess('Copied to clipboard');
	};

	return (
		<ContentBox id='about'>
			{!isLoading && Object.keys(data).length !== 0 && (
				<Fragment>
					<h3 className='mb-4 text-white text-2xl font-semibold'>{data.headline}</h3>
					<h4 className='mb-4 text-neutral-100 font-bold text-xl tracking-wide leading-normal'>
						{data.subheadline}
					</h4>
					{Object.keys(data.paragraphs).map((item) => {
						return (
							<p key={item} className='mb-4 leading-relaxed text-neutral-300'>
								{data.paragraphs[item]}
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
