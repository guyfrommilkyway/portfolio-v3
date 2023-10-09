// packages
import React from 'react';

// types
interface Props {
	key: number;
	link: string;
	name: string;
}

const Link: React.FC<Props> = (props) => {
	const { link, name } = props;

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
