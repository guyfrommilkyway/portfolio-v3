// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Projects from '@/components/Projects';
import Contact from '@/components/Sections/Contact';

const HomePage: React.FC<StaticProps> = props => {
  const { staticData } = props;

  return (
    <Fragment>
      <Head title='Almer Tampus' />
      <Layout {...staticData}>
        <Projects headline='Work' data={staticData.work} />
        {/* <Projects headline='Personal' data={staticData.personal} /> */}
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
