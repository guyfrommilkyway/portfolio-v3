// packages
import React, { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import Logo from '@/components/Logo';
import Photo from './components/Photo';
import Link from './components/Social';

// helpers
import useHeroStore from '@/store/hero';

// utils
import fetchFirebase from '@/services/firebase';

const Hero: React.FC = (props) => {
	// store
	const { hero, dataHandler } = useHeroStore((state) => state);

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetchFirebase('hero');

		// save to store
		dataHandler(response);

		return response;
	};

	// query
	const { data, isLoading } = useQuery({
		queryKey: ['hero'],
		queryFn: queryHandler,
		initialData: props,
		staleTime: 1000 * 60 * 10, // 10 minutes
		refetchInterval: 1000 * 60 * 10, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<aside className='lg:sticky lg:top-0 flex flex-col w-full lg:max-w-[340px] lg:h-screen p-8 border-b border-neutral-900'>
			{!isLoading && Object.keys(data).length !== 0 && (
				<Fragment>
					<div className='flex items-center gap-2 mt-2 mb-12'>
						<Logo />
					</div>
					<Photo />
					<h3 className='mb-2 text-white font-bold text-3xl leading-tighter tracking-wider'>
						{data.headline}
					</h3>
					<span className='mb-4 text-lg text-neutral-300'>{data.title}</span>
					<div className='flex gap-4'>
						{Object.keys(data.social).map((item) => {
							return <Link key={item} {...data.social[item]} />;
						})}
					</div>
				</Fragment>
			)}
		</aside>
	);
};

export default Hero;
