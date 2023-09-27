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
		<div className='flex flex-col lg:flex-row gap-4 w-full p-4 tracking-wide leading-relaxed rounded-sm transition-transform ease-in-out delay-100 hover:scale-105 hover:bg-neutral-700'>
			<div className='w-full lg:w-[20%]'>
				<span className='w-fit text-white text-sm uppercase leading-none tracking-tighter '>
					{duration}
				</span>
			</div>
			<div className='w-full lg:w-[80%]'>
				<h4 className='mb-2 text-white text-xl font-semibold'>{title}</h4>
				<h5 className='text-lg text-white'>{company}</h5>
				<a
					className='flex gap-2 w-fit mb-2 text-neutral-100 hover:underline'
					href={link}
					target='_blank'
				>
					{website}
					<ArrowUpSVG width={14} height={14} />
				</a>
				<ul className='mb-4 list-outside list-disc'>
					{description.map((item, index) => {
						return (
							<li key={index} className='text-white tracking-wide leading-relaxed'>
								{item}
							</li>
						);
					})}
				</ul>
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
