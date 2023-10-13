// packages
import React from 'react';

// components
import Logo from '@/components/Logo';
import Photo from './components/Photo';
import Link from './components/Social';

const Hero: React.FC<HeroProps> = (props) => {
	const { headline, title, social } = props;

	return (
		<aside className='lg:sticky lg:top-0 flex flex-col w-full lg:max-w-[340px] lg:h-screen p-4 border-b border-neutral-900'>
			<div className='mb-12'>
				<Logo />
			</div>
			<Photo />
			<h3 className='mb-2 text-white font-bold text-3xl leading-tighter tracking-wider'>
				{headline}
			</h3>
			<span className='mb-4 text-lg text-neutral-300'>{title}</span>
			<div className='flex gap-4'>
				{!!social &&
					Object.keys(social).map((item) => {
						return <Link key={item} {...social[item]} />;
					})}
			</div>
		</aside>
	);
};

export default Hero;
