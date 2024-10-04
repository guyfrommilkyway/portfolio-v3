// packages
import React from 'react';

// components
import Home from '@/components/routes/home';

interface Props {
  data: IFirebase;
}

const Page: React.FC<Props> = props => <Home {...props} />;

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/v1/firebase`,
    );
    const data = await response.json();

    return {
      props: {
        data: data?.v1,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}

export default Page;
