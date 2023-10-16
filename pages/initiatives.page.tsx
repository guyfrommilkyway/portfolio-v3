// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Personal from '@/components/Projects/Personal';
import Education from '@/components/Education';
import ContinuousLearning from '@/components/ContinuousLearning';
import Certifications from '@/components/Certifications';

const Initiatives: React.FC<StaticProps> = props => {
  const { staticData } = props;

  return (
    <Fragment>
      <Head title='Initiatives' />
      <Layout data={staticData.hero}>
        <ContinuousLearning data={staticData.continuouslearning} />
        <Personal data={staticData.personal} />
        <Education data={staticData.education} />
        <Certifications data={staticData.certifications} />
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
    console.log(error);

    return {
      props: {
        staticData: null,
      },
      revalidate: 60, // seconds
    };
  }
}

export default Initiatives;
