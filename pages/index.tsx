// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import WhatsNew from '@/components/WhatsNew';
import RecentNews from '@/components/RecentNews';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

// helpers
import useDataStore from '@/store/data';

// utils
import { getAll } from '@/services/firebase';

// types
import { HomeProps } from '@/types';

const Home: React.FC<HomeProps> = (props) => {
	const { staticData } = props;

	// store
	const data = useDataStore((state: any) => state.data);

	// data
	const whatsnew = data.whatsnew || staticData.whatsnew;
	const recentnews = data.recentnews || staticData.recentnews;
	const biography = data.biography || staticData.biography;
	const experience = data.experience || staticData.experience;
	const work = data.work || staticData.work;
	const personal = data.personal || staticData.personal;

	return (
		<Fragment>
			<Head title='Almer Tampus' />
			<Layout>
				{Object.keys(data).length !== 0 && (
					<Fragment>
						<WhatsNew data={whatsnew} />
						<RecentNews data={recentnews} />
						<About {...biography} />
						<Experience data={experience} />
						<Projects work={work} personal={personal} />
					</Fragment>
				)}
			</Layout>
		</Fragment>
	);
};

export async function getStaticProps() {
	// api
	const staticData = await getAll();

	return {
		props: {
			staticData,
		},
	};
}

export default Home;
