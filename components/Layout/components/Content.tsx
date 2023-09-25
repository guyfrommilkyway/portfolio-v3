// packages below
import React from 'react';

// types below
import { ChildrenProps } from '@/types';

const Content: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<div className='relative w-full lg:max-w-[60%] mb-[180px] p-4 md:p-16 lg:px-20 lg:py-10'>
			{children}
		</div>
	);
};

export default Content;
