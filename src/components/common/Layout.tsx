import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React, { Fragment, ReactNode } from 'react';

import Logo from '@/components/common/Logo';
import Hero from '@/components/routes/home/components/Hero';

import { PageProps } from '@/types/pageProps';

interface Props extends PageProps {
  children: ReactNode;
}

const Layout: React.FC<Props> = props => {
  const { firebase, user, children } = props;

  const HeroProps = { user, data: firebase?.hero };

  return (
    <Fragment>
      <header className='sticky top-0 z-50 flex justify-center items-center w-full min-h-[60px] mx-auto px-4 py-4 bg-neutral-900'>
        <Logo />
      </header>
      <main
        className='relative flex flex-col lg:flex-row gap-8 w-full max-w-[998px] mx-auto p-2 md:p-4 lg:p-8 transition-opacity ease-in-out delay-150'
        style={{ minHeight: 'calc(100vh - 157px)' }}
      >
        <Hero {...HeroProps} />
        <section className='relative w-full'>{children}</section>
      </main>
      <footer className='flex flex-col justify-center items-center gap-8 lg:gap-4 w-full min-h-[75px] py-8 bg-neutral-700'>
        <div className='block text-xs text-center text-neutral-300'>
          <p className='select-none'>Made from Figma. Built using Next.js and Tailwind.</p>
          <p className='select-none'>Integrated with Firebase. Deployed with Vercel.</p>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </Fragment>
  );
};

export default Layout;
