// packages
import React from 'react';

const Resume: React.FC = () => {
	return (
		<div className='p-4 bg-neutral-900 rounded-3xl'>
			<p className='mb-4 text-white text-lg font-semibold'>Downloadables</p>
			<a
				className='block w-fit px-4 py-2 text-neutral-800 font-medium bg-white rounded-3xl hover:bg-neutral-200'
				href={process.env.NEXT_PUBLIC_RESUME}
				target='_blank'
				referrerPolicy='no-referrer'
			>
				Resume
			</a>
		</div>
	);
};

export default Resume;
