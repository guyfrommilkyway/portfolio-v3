// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';

// types
import { RecentNewsProps } from '@/types';

const RecentNews: React.FC<RecentNewsProps> = (props) => {
	const { data } = props;

	return (
		<ContentBox id='whatsnew'>
			<h3 className='mb-4 text-white text-2xl font-semibold'>Recent News</h3>
			<ul className='list-inside list-disc text-neutral-300'>
				{Object.keys(data).map((item) => {
					return <li key={item}>{data[item]}</li>;
				})}
			</ul>
		</ContentBox>
	);
};

export default RecentNews;
