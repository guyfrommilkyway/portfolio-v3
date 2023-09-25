// packages below
import React from 'react';

// types below
import { PillProps } from '@/types';

const Pill: React.FC<PillProps> = (props) => {
	const { tech } = props;

	return (
		<span className='mr-2 text-neutral-700 hover:font-semibold hover:underline hover:text-black transition ease-in-out delay-110 cursor-pointer'>
			{tech}
		</span>
	);
};

export default Pill;
