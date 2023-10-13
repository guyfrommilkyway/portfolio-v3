// packages
import React from 'react';

const News: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<aside className='hidden lg:flex sticky top-[80px] flex-col gap-4 w-full max-w-[320px] h-fit p-4 px-4'>
			{children}
		</aside>
	);
};

export default News;
