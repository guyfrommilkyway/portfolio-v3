// packages below
import React from 'react';

// assets below
import SpinnerSVG from '@/assets/svg/spinner.svg';

// types below
import { LoadingScreenProps } from '@/types';

const LoadingScreen: React.FC<LoadingScreenProps> = (props) => {
	const { isLoading, isRemoving } = props;

	const loading = isLoading ? 'opacity-100' : 'opacity-0';
	const removing = isRemoving ? 'hidden' : 'block';

	return (
		<div
			className={`fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center w-screen h-screen bg-neutral-600 transition-opacity ease-in-out delay-200 ${loading} ${removing}`}
		>
			<SpinnerSVG width={80} height={80} />
		</div>
	);
};

export default LoadingScreen;
