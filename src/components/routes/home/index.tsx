import React, { Fragment } from 'react';

import Head from '@/components/common/Head';
import Layout from '@/components/common/Layout';

import useRepo from '@/hooks/useRepo';

import { PageProps } from '@/types/pageProps';

import SectionExperience from './components/Experience';
import SectionGitHub from './components/GitHub';

const Home: React.FC<PageProps> = props => {
    const { firebase, user } = props;

    const { repo } = useRepo();

    console.log(repo);

    const SectionExperienceProps = { data: firebase?.experience };
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
