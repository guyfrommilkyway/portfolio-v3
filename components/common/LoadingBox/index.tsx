// packages
import React from 'react';

// asset
import LoadingSVG from '@/assets/svg/rolling.svg';

const LoadingBox: React.FC = () => {
	return (
		<div className='flex justify-center items-center w-full h-[80px]'>
			<LoadingSVG width={32} height={32} />
		</div>
	);
};

export default LoadingBox;
