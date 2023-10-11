// packages
import React from 'react';

// types
import { ChildrenProps } from '@/types';

const News: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<aside className='hidden xl:block sticky top-0 h-fit w-full max-w-[340px] pt-8 pb-36'>
			{children}
		</aside>
	);
};

export default News;
