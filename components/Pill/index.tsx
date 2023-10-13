// packages
import React from 'react';

const Pill: React.FC<PillProps> = (props) => {
	const { tech } = props;

	return (
		<span className='p-1 text-sm text-neutral-300 hover:text-white hover:underline bg-neutral-700 transition ease-in-out delay-100 cursor-pointer'>
			{tech}
		</span>
	);
};

export default Pill;
