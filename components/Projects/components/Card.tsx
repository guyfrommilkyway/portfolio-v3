// packages below
import React from 'react';
import Image from 'next/image';

// comopnents below
import Pill from '@/components/Pill';

// types below
import { WorkCardProps } from '@/types';

// assets below
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';

const Card: React.FC<WorkCardProps> = (props) => {
	const { name, link, website, description, technologies, image } = props;

	return (
		<div className='flex flex-col lg:flex-row justify-start items-start gap-8 p-4 rounded-sm transition-transform ease-in-out delay-150 hover:scale-105 hover:bg-neutral-100'>
			<div className='relative flex justify-center items-center w-[300px] min-h-[150px]  opacity-70 hover:opacity-100 transition-opacity ease-in delay-100 rounded-sm overflow-hidden'>
				{image ? (
					<Image src={image} width={1400} height={814} objectFit='cover' alt={name.toLowerCase()} />
				) : (
					<Image src='/images/react.png' width={50} height={50} alt={name.toLowerCase()} />
				)}
			</div>
			<div className='w-full'>
				<h6 className='mb-2 font-semibold'>{name}</h6>
				<a
					className='flex gap-2 w-fit mb-2 underline text-neutral-700 hover:text-black'
					href={link}
					target='_blank'
				>
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
