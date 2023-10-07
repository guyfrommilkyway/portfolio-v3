// packages below
import React from 'react';

// types below
import { ChildrenProps } from '@/types';

const Container: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<div className='relative flex flex-col lg:flex-row gap-0 w-full max-w-[1920px] h-full mx-auto border-x border-neutral-900'>
			{children}
		</div>
	);
};

export default Container;
