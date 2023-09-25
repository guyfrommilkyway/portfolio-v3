// packages below
import React from 'react';

// components below
import Pill from '@/components/Pill';

// types below
import { CardProps } from '@/types';

// assets below
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';

const Card: React.FC<CardProps> = (props) => {
	const { duration, title, company, link, website, description, technologies } = props;

	return (
		<div className='flex flex-col lg:flex-row gap-4 w-full p-4 tracking-wide leading-relaxed rounded-sm transition-transform ease-in-out delay-150 hover:scale-105 hover:bg-neutral-100'>
			<div className='w-full lg:w-[20%]'>
				<span className='w-fit text-neutral-500 text-sm uppercase leading-none tracking-tighter '>
					{duration}
				</span>
			</div>
			<div className='w-full lg:w-[80%]'>
				<h5 className='mb-2 text-lg font-semibold'>{title}</h5>
				<h6 className='mb-2text-neutral-700'>{company}</h6>
				<a className='flex gap-2 w-fit mb-2 underline text-neutral-700' href={link} target='_blank'>
					{website}
					<ArrowUpSVG width={14} height={14} />
				</a>
				<p className='mb-4 text-neutral-700 leading-relaxed'>{description}</p>
				<div className='flex flex-wrap gap-2'>
					{technologies.map((item) => {
						return <Pill key={item} tech={item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Card;
