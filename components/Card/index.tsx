// packages
import React from 'react';

const Card: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return <div className='w-full h-full py-4 bg-neutral-900 rounded-2xl'>{children}</div>;
};

export default Card;
