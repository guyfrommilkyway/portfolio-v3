// import packages below
import { Fragment } from 'react';

// import components below
import Head from '@/components/Head';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Fragment>
      <Head title='Almer Tampus' />
      <Hero />
    </Fragment>
  );
}
