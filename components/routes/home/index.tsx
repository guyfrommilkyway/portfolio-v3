import React, { Fragment } from 'react';
import Head from '@/components/common/Head';
import Layout from '@/components/common/Layout';
import SectionExperience from './components/Experience';

interface Props {
  data: IFirebase;
}

const Home: React.FC<Props> = props => {
  const { data } = props;

  return (
    <Fragment>
      <Head title='Almer Tampus' />
      <Layout {...data}>
        <SectionExperience data={data?.experience} />
      </Layout>
    </Fragment>
  );
};

export default Home;
