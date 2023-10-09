// packages
import React, { useState, useEffect } from 'react';

// types
import { ChildrenProps } from '@/types';

const Container: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<main className='relative flex flex-col lg:flex-row gap-0 w-full max-w-[1920px] h-full mx-auto border-x border-neutral-900 transition-opacity ease-in-out delay-150'>
			{children}
		</main>
	);
};

export default Container;
