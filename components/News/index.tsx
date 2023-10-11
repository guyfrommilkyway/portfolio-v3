// packages
import React from 'react';

// components
import WhatsNew from '@/components/WhatsNew';
import RecentNews from '@/components/RecentNews';

const News: React.FC = () => {
	return (
		<aside className='hidden xl:block sticky top-0 h-fit w-full max-w-[340px] pt-8 pb-36'>
			<WhatsNew />
			<RecentNews />
		</aside>
	);
};

export default News;
