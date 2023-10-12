// packages
import React from 'react';

// components
import Pill from '@/components/Pill';

// assets
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
	const { name, link, website, description, technologies } = props;

	return (
		<div className='flex flex-col lg:flex-row justify-start items-start gap-8'>
			<div className='w-full'>
				<h4 className='mb-2 text-white text-lg font-semibold'>{name}</h4>
				<a
					className='flex gap-2 w-fit mb-2 text-neutral-300 underline hover:text-white'
					href={link}
					target={link === '#' ? '_self' : '_blank'}
				>
					{website}
					<ArrowUpSVG width={14} height={14} />
				</a>
				<p className='mb-4 text-neutral-300 leading-relaxed'>{description}</p>
				<div className='flex flex-wrap gap-2'>
					{Object.keys(technologies).map((item) => {
						return <Pill key={item} tech={technologies[item]} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
