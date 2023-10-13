// packages
import React from 'react';

// components
import Photo from './components/Photo';
import Link from './components/Social';
import Card from '../Card';

const Hero: React.FC<HeroProps> = (props) => {
	const { headline, title, social } = props;

	return (
		<aside className='relative md:sticky md:top-[80px] flex flex-col gap-3 w-full md:max-w-[320px] h-fit px-4 pt-4 pb-10 border-b md:border-none border-neutral-900'>
			<Photo />
			<h3 className='text-white font-bold text-3xl leading-tighter tracking-wider'>{headline}</h3>
			<div className='flex gap-4'>
				{!!social &&
					Object.keys(social).map((item) => {
						return <Link key={item} {...social[item]} />;
					})}
			</div>
			<p className='mb-4 text-lg text-neutral-300 leading-snug'>{title}</p>
		</aside>
	);
};

export default Hero;
