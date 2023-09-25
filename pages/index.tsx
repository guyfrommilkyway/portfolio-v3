// import packages below
import { Fragment } from 'react';

// import components below
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

// data below
import { hero } from '@/data/hero';
import { experience } from '@/data/experience';
import { work } from '@/data/work';
import { personal } from '@/data/personal';

export default function Home() {
	return (
		<Fragment>
			<Head title='Almer Tampus' />
			<Layout>
				<About data={hero} />
				<Experience data={experience} />
				<Projects data={work} data2={personal} />
			</Layout>
		</Fragment>
	);
}

export async function getStaticProps() {
	return {
		props: {},
	};
}
