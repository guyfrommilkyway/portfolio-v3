// packages below
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Photo = () => {
	// state
	const [availHeight, setAvailHeight] = useState<number>(1080);

	useEffect(() => {
		addEventListener('scroll', () => {
			setAvailHeight(window.screen.availHeight);
		});

		return () => removeEventListener('scroll', () => {});
	}, []);

	console.log(availHeight);

	return (
		<>
			{availHeight > 848 && (
				<div className='hidden lg:block relative w-full max-w-[240px] min-w-[100px] h-full max-h-[320px] min-h-[133px] mb-20'>
					<Image
						className='transition-transform ease-in-out delay-100 hover:scale-105'
						src='/images/me.jpg'
						fill={true}
						alt='almer-tampus.jpg'
					/>
					<div className='absolute left-10 top-10 z-[-1] w-full h-full bg-neutral-100 transition-transform ease-in-out delay-100 hover:scale-105'></div>
				</div>
			)}
		</>
	);
};

export default Photo;
