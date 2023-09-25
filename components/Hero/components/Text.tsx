// packages below
import React, { Fragment } from 'react';

// assets below
import LinkedInSVG from '@/assets/svg/mdi_linkedin.svg';
import GithubSVG from '@/assets/svg/mdi_github.svg';
import TwitterSVG from '@/assets/svg/mdi_twitter.svg';
import InstagramSVG from '@/assets/svg/mdi_instagram.svg';

const Text: React.FC = () => {
	return (
		<Fragment>
			<h1 className='mb-2 font-bold text-4xl leading-tight tracking-wide'>Almer Tampus</h1>
			<p className='mb-4 text-xl text-neutral-700'>Agile Web Developer</p>
			<p className='w-full mb-8 text-lg text-neutral-700 leading-relaxed'>
				Elevating the Digital Experience on the Web
			</p>
			<div className='flex gap-4'>
				<a
					className='transition ease-in-out delay-100 hover:scale-125'
					href='https://linkedin.com/in/almerflorestampus'
					target='_blank'
				>
					<LinkedInSVG width='28px' height='28px' />
				</a>
				<a
					className='transition ease-in-out delay-100 hover:scale-125'
					href='https://github.com/guyfrommilkyway'
					target='_blank'
				>
					<GithubSVG width='28px' height='28px' />
				</a>
				<a
					className='transition ease-in-out delay-100 hover:scale-125'
					href='https://twitter.com/guyfrommilkyway'
					target='_blank'
				>
					<TwitterSVG width='28px' height='28px' />
				</a>
				<a
					className='transition ease-in-out delay-100 hover:scale-125'
					href='https://instagram.com/aftampus'
					target='_blank'
				>
					<InstagramSVG width='28px' height='28px' />
				</a>
			</div>
		</Fragment>
	);
};

export default Text;
