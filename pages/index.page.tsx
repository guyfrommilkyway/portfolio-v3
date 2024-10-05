import React from 'react';

import Home from '@/components/routes/home';

import Services from '@/services/api';

import { PageProps } from '@/types/pageProps';

const services = new Services();

const Page: React.FC<PageProps> = props => <Home {...props} />;

export async function getServerSideProps() {
    try {
        const [firebase, user] = await Promise.all([
            services.getFirebase().then(response => response.data),
            services.getUser().then(response => response.data),
        ]);

        return {
            props: {
                firebase,
                user,
            },
        };
    } catch (error) {
        return {
            props: {
                firebase: null,
                user: null,
            },
        };
    }
}

export default Page;
