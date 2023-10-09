// packages
import React from 'react';

// types
import { PillProps } from '@/types';

const Pill: React.FC<PillProps> = (props) => {
	const { tech } = props;

	return (
		<span className='px-2 py-1 text-sm text-neutral-300 bg-neutral-900 rounded-sm hover:text-white hover:underline transition ease-in-out delay-100 cursor-pointer'>
			{tech}
		</span>
	);
};

export default Pill;
