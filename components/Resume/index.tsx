// packages
import React from 'react';

// components
import Card from '@/components/Card';

const Resume: React.FC = () => {
	return (
		<Card height='h-fit'>
			<p className='mx-4 mb-4 text-white text-lg font-semibold'>Downloadables</p>
			<a
				className='block w-fit mx-4 px-4 py-2 text-neutral-800 font-medium bg-neutral-200 rounded-3xl hover:bg-neutral-100'
				href={process.env.NEXT_PUBLIC_RESUME}
				target='_blank'
				referrerPolicy='no-referrer'
			>
				Resume
			</a>
		</Card>
	);
};

export default Resume;
