// packages
import React, { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';

// components
import Header from './components/Header';
import Container from './components/Container';
import Hero from '@/components/Hero';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Information from '@/components/Information';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';

const Layout: React.FC<LayoutProps> = props => {
  const { hero, experience, education, certifications, children } = props;

  return (
    <Fragment>
      <Header />
      <Container>
        <Sidebar>
          <Experience data={experience} />
          <Education data={education} />
          <Certifications data={certifications} />
        </Sidebar>
        <Hero {...hero} />
        <Content>{children}</Content>
        <Information>
          <Experience data={experience} />
          <Education data={education} />
          <Certifications data={certifications} />
        </Information>
      </Container>
      <Analytics />
    </Fragment>
  );
};

export default Layout;
