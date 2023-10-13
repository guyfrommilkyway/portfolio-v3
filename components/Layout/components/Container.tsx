// packages
import React from 'react';

const Container: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<main className='relative flex flex-col md:flex-row gap-0 w-full max-w-[1600px] h-full mx-auto transition-opacity ease-in-out delay-150 border-x border-b border-neutral-900'>
			{children}
		</main>
	);
};

export default Container;
