import React, { Fragment } from 'react';

import Head from '@/components/common/Head';
import Layout from '@/components/common/Layout';

import { PageProps } from '@/types/pageProps';

import SectionExperience from './components/Experience';
import SectionGitHub from './components/GitHub';

const Home: React.FC<PageProps> = props => {
    const { firebase, user, repo } = props;

    const SectionExperienceProps = { data: firebase?.v1?.experience };
    const SectionGitHubProps = { user, data: repo };

    return (
        <Fragment>
            <Head title='Almer Tampus' />
            <Layout {...props}>
                <SectionExperience {...SectionExperienceProps} />
                <SectionGitHub {...SectionGitHubProps} />
            </Layout>
        </Fragment>
    );
};

export default Home;
