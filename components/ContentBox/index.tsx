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
			className='relative w-full px-4 py-16 md:p-16 lg:px-20 border-b border-neutral-900'
		>
			{children}
		</section>
	);
};

export default ContentBox;
