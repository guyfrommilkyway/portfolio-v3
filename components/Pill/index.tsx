// packages below
import React from 'react';

// types below
import { PillProps } from '@/types';

const Pill: React.FC<PillProps> = (props) => {
	const { tech } = props;

	return (
		<span className='mr-2 p-2 text-sm text-white bg-neutral-500 rounded-sm hover:underline transition ease-in-out delay-100 cursor-pointer'>
			{tech}
		</span>
	);
};

export default Pill;
