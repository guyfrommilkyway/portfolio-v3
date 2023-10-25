// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import About from '@/components/Sections/About';
import Experience from '@/components/Sections/Experience';
import Projects from '@/components/Sections/Projects';
import Education from '@/components/Sections/Education';
import Certifications from '@/components/Sections/Certifications';
import ContinuousLearning from '@/components/Sections/ContinuousLearning';
import Contact from '@/components/Sections/Contact';

const HomePage: React.FC<StaticProps> = props => {
  const { staticData } = props;

  return (
    <Fragment>
      <Head title='Almer Tampus' />
      <Layout data={staticData.hero}>
        <About {...staticData.biography} />
        <Experience data={staticData.experience} />
        <Projects headline='Works' data={staticData.work} />
        <Projects headline='Side Projects' data={staticData.personal} />
        <Certifications data={staticData.certifications} />
        <Education data={staticData.education} />
        <ContinuousLearning data={staticData.continuouslearning} />
        <Contact />
      </Layout>
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/firebase/all`,
    );
    const staticData = await response.json();

    return {
      props: {
        staticData,
      },
      revalidate: 60, // seconds
    };
  } catch (error) {
    return {
      props: {
        staticData: null,
      },
      revalidate: 60, // seconds
    };
  }
}

export default HomePage;
