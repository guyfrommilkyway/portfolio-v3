// packages
import React, { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// components
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Hero from '@/components/routes/home/components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

interface PLayout extends IFirebase, PChildren {}

const Layout: React.FC<PLayout> = props => {
  const { hero, children } = props;

  return (
    <Fragment>
      <Header />
      <MainContainer>
        <Hero {...hero} />
        <Content>{children}</Content>
      </MainContainer>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </Fragment>
  );
};

export default Layout;
