// packages
import React, { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';

// components
import Head from '@/components/Head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Personal from '@/components/Personal';

const Home: React.FC<HomeProps> = (props) => {
	const { staticdata } = props;

	// query handler
	const queryHandler = async () => {
		// api
		const response = await fetch('api/v1/firebase/all');
		const data = await response.json();

		return data;
	};

	// query
	const { data } = useQuery({
		queryKey: ['data'],
		queryFn: queryHandler,
		initialData: staticdata,
		staleTime: 1000 * 60 * 1, // 1 minute
		refetchInterval: 1000 * 60 * 1, // 1 minute
		refetchIntervalInBackground: true,
	});

	return (
		<Fragment>
			<Head title='Almer Tampus' />
			<Layout
				renderHero={() => {
					return <Hero {...data?.hero} />;
				}}
				renderContent={() => {
					return (
						<Fragment>
							<About {...data?.biography} />
							<Experience data={data?.experience} />
							<Work data={data?.work} />
							<Personal data={data?.personal} />
						</Fragment>
					);
				}}
			/>
		</Fragment>
	);
};

export async function getStaticProps() {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/v1/firebase/all`);
		const staticdata = await response.json();

		return {
			props: {
				staticdata,
			},
		};
	} catch (error) {
		console.log(error);

		return {
			props: {
				staticdata: null,
			},
		};
	}
}

export default Home;
