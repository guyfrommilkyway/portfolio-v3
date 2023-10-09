// packages
import React from 'react';

// components
import Photo from './components/Photo';
import Text from './components/Text';

// data
import { hero } from '@/data/hero';

const Hero: React.FC = () => {
	return (
		<section className='lg:sticky lg:top-0 flex flex-col w-full lg:max-w-[40%] lg:h-screen px-4 py-24 md:px-16 md:py-32 lg:px-20 lg:py-10'>
			<Photo />
			<Text {...hero} />
		</section>
	);
};

export default Hero;
