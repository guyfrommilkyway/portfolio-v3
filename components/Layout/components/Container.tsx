// packages
import React, { useState, useEffect } from 'react';

// types
import { ChildrenProps } from '@/types';

const Container: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<main className='relative flex flex-col lg:flex-row gap-0 w-full max-w-[1600px] h-full mx-auto transition-opacity ease-in-out delay-150 border-x border-neutral-900'>
			{children}
		</main>
	);
};

export default Container;
