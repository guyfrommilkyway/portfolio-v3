// packages
import React from 'react';

const NewsCard: React.FC<NewsCardProps> = (props) => {
	const { item } = props;

	return (
		<div className='px-4 py-2 transition ease-linear delay-100 hover:bg-neutral-800 cursor-pointer'>
			{item}
		</div>
	);
};

export default NewsCard;
