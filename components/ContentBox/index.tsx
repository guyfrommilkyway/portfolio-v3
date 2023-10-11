// packages
import React from 'react';

// types
import { ChildrenProps } from '@/types';

interface Props extends ChildrenProps {
	id: string;
}

const ContentBox: React.FC<Props> = (props) => {
	const { id, children } = props;

	return (
		<section
			id={id}
			className='relative w-full px-4 py-12 md:px-8 lg:px-12 border-b border-neutral-900'
		>
			{children}
		</section>
	);
};

export default ContentBox;
