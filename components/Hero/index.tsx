// packages belo
import React from 'react';

// components below
import Photo from './components/Photo';
import Text from './components/Text';

const Hero: React.FC = () => {
	return (
		<div className='lg:sticky lg:top-0 flex flex-col w-full lg:max-w-[30%] h-screen px-4 pt-32 md:px-16 md:py-32 lg:px-20 lg:py-10'>
			<Photo />
			<Text />
		</div>
	);
};

export default Hero;
