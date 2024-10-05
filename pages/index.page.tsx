import React from 'react';

import Home from '@/components/routes/home';

import Services from '@/services/api';

import { PageProps } from '@/types/pageProps';

const services = new Services();

const Page: React.FC<PageProps> = props => <Home {...props} />;

export async function getServerSideProps() {
    try {
        const [firebase, user, repo] = await Promise.all([services.getFirebase(), services.getUser(), services.getRepo()]);

        return {
            props: {
                firebase,
                user,
                repo,
            },
        };
    } catch (error) {
        return {
            props: {
                firebase: null,
                user: null,
                repo: [],
            },
        };
    }
}

export default Page;
