// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Personal from '@/components/Personal';
import WhatsNew from '@/components/WhatsNew';
import RecentNews from '@/components/RecentNews';

// utils
import fetchFirebase from '@/services/firebase';

// types
import { HomeProps } from '@/types';

const Home: React.FC<HomeProps> = (props) => {
	// static data
	const { staticData } = props;

	return (
		<Fragment>
			<Head title='Almer Tampus' />
			<Layout
				renderHero={() => {
					return <Hero {...staticData.hero} />;
				}}
				renderContent={() => {
					return (
						<Fragment>
							<About {...staticData.biography} />
							<Experience {...staticData.experience} />
							<Work {...staticData.work} />
							<Personal {...staticData.personal} />
						</Fragment>
					);
				}}
				renderNews={() => {
					return (
						<Fragment>
							<WhatsNew {...staticData.whatsnew} />
							<RecentNews {...staticData.recentnews} />
						</Fragment>
					);
				}}
			></Layout>
		</Fragment>
	);
};

export async function getStaticProps() {
	// api call
	const response = await fetchFirebase('');

	return {
		props: {
			staticData: response,
		},
	};
}

export default Home;
