// packages
import React from 'react';

// components
import Footer from '@/components/Footer';

// types
import { ChildrenProps } from '@/types';

const Content: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<section className='relative w-full border-x border-neutral-900'>
			{children}
			<Footer />
		</section>
	);
};

export default Content;
