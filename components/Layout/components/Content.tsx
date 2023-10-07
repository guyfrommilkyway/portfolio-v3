// packages below
import React from 'react';

// types below
import { ChildrenProps } from '@/types';

const Content: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<section className='relative w-full lg:max-w-[60%] border-l border-neutral-900'>
			{children}
		</section>
	);
};

export default Content;
