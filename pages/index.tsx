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
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/firebase/all`);
		const staticData = await response.json();

		return {
			props: {
				staticData,
			},
		};
	} catch (error) {
		return {
			props: {
				staticData: null,
			},
		};
	}
}

export default Home;
