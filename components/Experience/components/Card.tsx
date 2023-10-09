// packages
import React from 'react';

// components below
import Pill from '@/components/Pill';

// types
import { CardProps } from '@/types';

// assets
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';

const Card: React.FC<CardProps> = (props) => {
	const { duration, title, company, link, website, description, technologies } = props;

	return (
		<div className='flex flex-col gap-4 w-full tracking-wide leading-relaxed'>
			<span className='w-fit text-neutral-300 text-sm uppercase leading-none tracking-tighter'>
				{duration}
			</span>
			<div className='flex flex-col gap-1'>
				<h4 className='text-white text-xl font-semibold'>{title}</h4>
				<h5 className='text-lg text-white'>{company}</h5>
				<a
					className='flex gap-2 w-fit text-neutral-300 underline hover:text-white'
					href={link}
					target='_blank'
				>
					{website}
					<ArrowUpSVG width={14} height={14} />
				</a>
			</div>
			<div className='flex flex-wrap gap-2'>
				{technologies.map((item) => {
					return <Pill key={item} tech={item} />;
				})}
			</div>
		</div>
	);
};

export default Card;
