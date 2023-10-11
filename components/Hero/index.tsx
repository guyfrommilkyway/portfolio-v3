// packages
import React from 'react';

// components
import Photo from './components/Photo';
import Link from './components/Social';

// helpers
import useDataStore from '@/store/data';

const Hero: React.FC = () => {
	// store
	const { headline, title, social } = useDataStore((state: any) => state.data.hero);

	return (
		<section className='lg:sticky lg:top-0 flex flex-col w-full lg:max-w-[40%] lg:h-screen px-4 py-24 md:px-16 md:py-32 lg:px-20 lg:py-16 border-b lg:none border-neutral-900'>
			<Photo />
			<h1 className='mb-2 text-white font-bold text-4xl leading-tighter tracking-wider'>
				{headline}
			</h1>
			<h2 className='mb-4 text-xl text-neutral-300'>{title}</h2>
			<div className='flex gap-4'>
				{Object.keys(social).map((item) => {
					return <Link key={item} {...social[item]} />;
				})}
			</div>
		</section>
	);
};

export default Hero;
