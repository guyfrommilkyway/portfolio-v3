// packages below
import React from 'react';

// types below
import { PillProps } from '@/types';

const Pill: React.FC<PillProps> = (props) => {
	const { tech } = props;

	return (
		<span className='px-4 py-2 text-white text-sm bg-neutral-600 hover:bg-black rounded-full transition ease-in-out delay-100'>
			{tech}
		</span>
	);
};

export default Pill;
