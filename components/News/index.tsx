// packages
import React from 'react';

const News: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<aside className='hidden xl:flex sticky top-0 flex-col gap-4 w-full max-w-[340px] h-fit pt-4 pb-36 px-4'>
			{children}
		</aside>
	);
};

export default News;
