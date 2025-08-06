import React, { Fragment } from 'react';

import Head from '@/components/common/Head';
import Layout from '@/components/common/Layout';
import GitHub from '@/components/routes/home/components/GitHub';
import Work from '@/components/routes/home/components/Work';

import { PageProps } from '@/types/pageProps';

const Home: React.FC<PageProps> = props => {
  const { firebase, user, repositories } = props;

  if (!firebase || !user || !repositories) return null;

  const SectionExperienceProps = { data: firebase?.experience };
  const SectionGitHubProps = { user, data: repositories };

  return (
    <Fragment>
      <Head title='Almer Tampus' />
      <Layout {...props}>
        <Work {...SectionExperienceProps} />
        <GitHub {...SectionGitHubProps} />
      </Layout>
    </Fragment>
  );
};

export default Home;
