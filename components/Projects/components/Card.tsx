// packages
import React from 'react';
import Image from 'next/image';

// comopnents
import Pill from '@/components/Pill';

// types
import { WorkCardProps } from '@/types';

// assets
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';

const Card: React.FC<WorkCardProps> = (props) => {
	const { name, link, website, description, technologies, image } = props;

	return (
		<div className='flex flex-col lg:flex-row justify-start items-start gap-8'>
			{/* <div className='relative flex justify-center items-center w-[240px] min-h-[150px] opacity-80 transition-opacity ease-in delay-100 rounded-sm overflow-hidden'>
				{image ? (
					<Image src={image} width={1400} height={814} alt={name.toLowerCase()} />
				) : (
					<Image src='/images/react.png' width={50} height={50} alt={name.toLowerCase()} />
				)}
			</div> */}
			<div className='w-full'>
				<h4 className='mb-2 text-white text-xl font-semibold'>{name}</h4>
				<a
					className='flex gap-2 w-fit mb-2 text-neutral-300 underline hover:text-white'
					href={link}
					target='_blank'
				>
					{website}
					<ArrowUpSVG width={14} height={14} />
				</a>
				<p className='mb-4 text-neutral-300 leading-relaxed'>{description}</p>
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
