// packages
import React from 'react';

// components
import Footer from '@/components/Footer';

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
