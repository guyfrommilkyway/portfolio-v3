// packages
import React from 'react';

// components
import Resume from '@/components/Resume';
import WhatsNew from '@/components/WhatsNew';
import RecentNews from '@/components/RecentNews';

// utils
import useToggle from '@/hooks/useToggle';

// assets
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Sidebar: React.FC = () => {
	// state
	const { toggle, toggleHandler } = useToggle();

	return (
		<div className='fixed top-5 right-4 z-50'>
			<button
				className='relative z-50 block lg:hidden mb-2 bg-transparent'
				onClick={() => toggleHandler()}
			>
				{toggle ? (
					<IoMdClose size='30px' color='#e5e5e5' />
				) : (
					<IoMdMenu size='30px' color='#e5e5e5' />
				)}
			</button>
			<div
				className={`fixed top-0 right-0 z-40 flex lg:hidden flex-col gap-4 w-full h-screen max-w-[420px] px-4 py-16 bg-neutral-800 overflow-x-auto ${
					toggle ? 'flex' : 'hidden'
				}`}
			>
				<Resume />
				<WhatsNew />
				<RecentNews />
			</div>
		</div>
	);
};

export default Sidebar;
