// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Projects from '@/components/Projects';
import Contact from '@/components/Sections/Contact';

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_URL}/api/v1/firebase/all`;

const HomePage: React.FC<StaticProps> = props => {
  const { data } = props;

  return (
    <Fragment>
      <Head title='Almer Tampus' />
      {data && (
        <Layout {...data}>
          <Projects headline='Work' data={data.work} />
          {/* <Projects headline='Personal' data={data.personal} /> */}
          <Contact />
        </Layout>
      )}
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(PUBLIC_URL);
    const data = await response.json();

    return {
      props: {
        data,
      },
      revalidate: 60, // seconds
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        data: null,
      },
      revalidate: 60, // seconds
    };
  }
}

export default HomePage;
