// import packages below
import { Fragment } from 'react';

// import components below
import Head from '@/components/Head';
import UnderMaintenace from '@/components/UnderMaintenance'

export default function Home() {
  return (
    <Fragment>
      <Head title='Under Maintenace' />
      <UnderMaintenace />
    </Fragment>
  )
}
