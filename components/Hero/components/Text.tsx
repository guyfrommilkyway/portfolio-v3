// packages
import React, { Fragment } from 'react';

// assets
import Link from './Social';

// types
type Social = {
	name: string;
	link: string;
};
interface Props {
	name: string;
	title: string;
	description: string;
	social: Social[];
}

const Text: React.FC<Props> = (props) => {
	const { name, title, description, social } = props;

	return (
		<Fragment>
			<h1 className='mb-2 text-white font-bold text-4xl leading-tighter tracking-wider'>{name}</h1>
			<h6 className='mb-4 text-lg text-neutral-300'>{title}</h6>
			{/* <p className='w-full max-w-[540px] mb-8 text-lg text-neutral-100 leading-relaxed'>
				{description}
			</p> */}
			<div className='flex gap-4'>
				{social.map((item, index) => {
					return <Link key={index} name={item.name} link={item.link} />;
				})}
			</div>
		</Fragment>
	);
};

export default Text;
