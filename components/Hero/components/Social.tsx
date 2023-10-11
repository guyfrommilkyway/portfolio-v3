// packages
import React from 'react';

// types
import { SocialProps } from '@/types';

const Link: React.FC<SocialProps> = (props) => {
	const { name, link } = props;

	return (
		<a
			className='text-neutral-300 underline transition ease-in-out delay-100 hover:text-white'
			href={link}
			target='_blank'
			referrerPolicy='no-referrer'
		>
			{name}
		</a>
	);
};

export default Link;
