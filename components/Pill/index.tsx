// packages
import React from 'react';

const Pill: React.FC<PillProps> = (props) => {
	const { tech } = props;

	return (
		<span className='px-2 py-1 text-sm text-neutral-300 hover:text-white hover:underline bg-neutral-700 transition ease-in-out delay-100 rounded-full cursor-pointer'>
			{tech}
		</span>
	);
};

export default Pill;
