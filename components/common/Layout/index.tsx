// packages
import React, { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// components
import Header from './components/Header';
import Container from './components/Container';
import Hero from '@/components/Sections/Hero';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import SideContent from './components/SideContent';
import Card from '@/components/common/Card';
import Education from '@/components/Cards/Education';
import RecentNews from '@/components/Cards/RecentNews';

interface PLayout extends IFirebase, PChildren {}

const Layout: React.FC<PLayout> = props => {
  const { hero, education, recentnews, children } = props;

  const INFORMATION_CARDS = (
    <>
      <Card title='Education'>
        {!!education &&
          Object.keys(education)
            .sort()
            .reverse()
            .map(item => {
              return <Education key={item} {...education[item]} />;
            })}
      </Card>
      <Card title='Recent news'>
        {!!recentnews &&
          Object.keys(recentnews)
            .sort()
            .reverse()
            .slice(0, 5)
            .map(item => {
              return <RecentNews key={item} {...recentnews[item]} />;
            })}
      </Card>
    </>
  );

  return (
    <Fragment>
      <Header />
      <Container>
        <Sidebar>{INFORMATION_CARDS}</Sidebar>
        <Hero {...hero} />
        <Content>{children}</Content>
        <SideContent>{INFORMATION_CARDS}</SideContent>
      </Container>
      <Analytics />
      <SpeedInsights />
    </Fragment>
  );
};

export default Layout;
