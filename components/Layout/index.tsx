// packages
import React, { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';

// components
import Header from './components/Header';
import Container from './components/Container';
import Hero from '@/components/Hero';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import News from '@/components/News';
import WhatsNew from '@/components/News/components/WhatsNew';
import RecentNews from '@/components/News/components/RecentNews';

const Layout: React.FC<LayoutProps> = props => {
  const { data, children } = props;

  return (
    <Fragment>
      <Header />
      <Container>
        <Sidebar />
        <Hero {...data} />
        <Content>{children}</Content>
        <News>
          <WhatsNew />
          <RecentNews />
        </News>
      </Container>
      <Analytics />
    </Fragment>
  );
};

export default Layout;
