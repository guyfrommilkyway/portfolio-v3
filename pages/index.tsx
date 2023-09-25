// import packages below
import { Fragment } from 'react';

// import components below
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
	return (
		<Fragment>
			<Head title='Almer Tampus' />
			<Layout>
				<About />
				<Experience />
				<Projects />
			</Layout>
		</Fragment>
	);
}
