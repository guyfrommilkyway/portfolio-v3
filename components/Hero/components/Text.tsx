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
			<p className='w-full max-w-[540px] mb-8 text-lg text-neutral-700 leading-relaxed'>
				Deeply committed to infusing innovation and user-centricity into every project I take on.
				Continuously strive to craft captivating and seamless online experiences that leave a
				lasting impact on users.
			</p>
			<div className='flex gap-4'>
				<a
					className='transition ease-in-out delay-100 hover:scale-125'
					href='https://linkedin.com/in/almerflorestampus'
					target='_blank'
				>
					<LinkedInSVG width='32px' height='32px' />
				</a>
				<a
					className='transition ease-in-out delay-100 hover:scale-125'
					href='https://github.com/guyfrommilkyway'
					target='_blank'
				>
					<GithubSVG width='32px' height='32px' />
				</a>
				<a
					className='transition ease-in-out delay-100 hover:scale-125'
					href='https://twitter.com/guyfrommilkyway'
					target='_blank'
				>
					<TwitterSVG width='32px' height='32px' />
				</a>
				<a
					className='transition ease-in-out delay-100 hover:scale-125'
					href='https://instagram.com/aftampus'
					target='_blank'
				>
					<InstagramSVG width='32px' height='32px' />
				</a>
			</div>
			{/* <div className='flex gap-8 lg:gap-16 items-center'>
				<button className='w-fit px-6 py-3 text-white uppercase hover:underline bg-black rounded-sm transition-transform ease-in-out delay-100 hover:scale-105'>
					Hire Me
				</button>
			</div> */}
		</Fragment>
	);
};

export default Text;
