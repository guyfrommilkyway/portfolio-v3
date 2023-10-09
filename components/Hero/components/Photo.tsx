// packages
import React from 'react';
import Image from 'next/image';

const Photo: React.FC = () => {
	return (
		<div className='relative z-0 mb-24'>
			<div className='relative z-10 w-[240px] h-[320px] rounded-sm overflow-hidden transition-all ease-in-out delay-100 hover:scale-105'>
				<Image
					className='aspect-auto'
					priority={true}
					fill={true}
					sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
					src='/images/me.jpg'
					alt='almer-tampus.jpg'
				/>
			</div>
			<div className='absolute left-10 top-10 -z-10 w-[240px] h-[320px] rounded-sm overflow-hidden transition-all ease-in-out delay-100 hover:scale-105 hover:z-20'>
				<Image
					className='aspect-auto'
					priority={true}
					fill={true}
					sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
					src='/images/me_2.jpg'
					alt='almer-tampus.jpg'
				/>
			</div>
		</div>
	);
};

export default Photo;
