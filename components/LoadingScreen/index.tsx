// packages
import React from 'react';

// assets
import SpinnerSVG from '@/assets/svg/spinner.svg';

const LoadingScreen: React.FC = () => {
	return (
		<div className='fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center w-screen h-screen bg-[#050505] transition-opacity ease-in-out delay-150'>
			<SpinnerSVG width={60} height={60} />
		</div>
	);
};

export default LoadingScreen;
