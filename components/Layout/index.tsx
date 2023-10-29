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
import InformationCard from '@/components/Information/components/Card';
import Experience from '@/components/Information/components/Experience';
import Education from '@/components/Information/components/Education';
import Certification from '@/components/Information/components/Certification';
import ContinuousLearning from '@/components/Information/components/ContinuousLearning';

const Layout: React.FC<LayoutProps> = props => {
  const {
    hero,
    experience,
    education,
    certifications,
    continuouslearning,
    children,
  } = props;

  const INFORMATION_CARDS = (
    <>
      <InformationCard title='Experience'>
        {!!experience &&
          Object.keys(experience)
            .sort()
            .reverse()
            .map(item => {
              return <Experience key={item} {...experience[item]} />;
            })}
      </InformationCard>
      <InformationCard title='Education'>
        {!!education &&
          Object.keys(education)
            .sort()
            .reverse()
            .map(item => {
              return <Education key={item} {...education[item]} />;
            })}
      </InformationCard>
      <InformationCard title='Certifications'>
        {!!certifications &&
          Object.keys(certifications)
            .sort()
            .reverse()
            .map(item => {
              return <Certification key={item} {...certifications[item]} />;
            })}
      </InformationCard>
      <InformationCard title='Continuous Learning'>
        {!!continuouslearning &&
          Object.keys(continuouslearning)
            .sort()
            .reverse()
            .map(item => {
              return (
                <ContinuousLearning key={item} {...continuouslearning[item]} />
              );
            })}
      </InformationCard>
    </>
  );

  return (
    <Fragment>
      <Header />
      <Container>
        <Sidebar>{INFORMATION_CARDS}</Sidebar>
        <Hero {...hero} />
        <Content>{children}</Content>
        <Information>{INFORMATION_CARDS}</Information>
      </Container>
      <Analytics />
    </Fragment>
  );
};

export default Layout;
