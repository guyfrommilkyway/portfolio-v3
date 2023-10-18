// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import About from '@/components/Sections/About';
import Experience from '@/components/Sections/Experience';
import Projects from '@/components/Sections/Projects';

const Home: React.FC<StaticProps> = props => {
  const { staticData } = props;

  return (
    <Fragment>
      <Head title='Almer Tampus' />
      <Layout data={staticData.hero}>
        <About {...staticData.biography} />
        <Experience data={staticData.experience} />
        <Projects data={staticData.work} />
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

export default Home;
