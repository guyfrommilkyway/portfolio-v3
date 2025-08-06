import React from 'react';

import Home from '@/components/routes/home';

import Services from '@/services/api';

import { PageProps } from '@/types/pageProps';

const services = new Services();

const Page: React.FC<PageProps> = props => <Home {...props} />;

export async function getServerSideProps() {
  try {
    const [firebase, user, repositories] = await Promise.all([
      services.getFirebase().then(response => response.data),
      services.getUser().then(response => response.data),
      services.getRepositories().then(response => response.data),
    ]);

    return {
      props: {
        firebase,
        user,
        repositories,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        firebase: null,
        user: null,
        repositories: null,
      },
    };
  }
}

export default Page;
