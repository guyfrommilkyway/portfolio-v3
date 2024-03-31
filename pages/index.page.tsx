// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/common/Head';
import Layout from '@/components/common/Layout';
import Experience from '@/components/Sections/Experience';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_URL}/api/v1/firebase`;

interface PHomePage {
  data: IFirebase;
}

const HomePage: React.FC<PHomePage> = ({ data }) => {
  const { experience, work, personal } = data;

  return (
    <Fragment>
      <Head title='Almer Tampus' />
      {!!data && (
        <Layout {...data}>
          <Experience data={experience} />
          <Projects headline='Work' data={work} />
          <Projects headline='Personal' data={personal} />
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
    return {
      props: {
        data: null,
      },
      revalidate: 60, // seconds
    };
  }
}

export default HomePage;
