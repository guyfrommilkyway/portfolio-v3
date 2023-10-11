// packages
import React, { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useQuery } from '@tanstack/react-query';

// components
import Container from './components/Container';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Content from './components/Content';
import Footer from '@/components/Footer';

// helpers
import useDataStore from '@/store/data';

// utils
import { getAll } from '@/services/axios';

// types
import { ChildrenProps } from '@/types';

const Layout: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	// store
	const setData = useDataStore((state: any) => state.setData);

	// query handler
	const queryHandler = async () => {
		// api
		const data = await getAll();

		// save to store
		setData(data);

		return data;
	};

	// query
	const { isLoading } = useQuery({
		queryKey: ['data'],
		queryFn: queryHandler,
		staleTime: 1000 * 10 * 60, // 10 minutes
		refetchInterval: 1000 * 10 * 60, // 10 minutes
		refetchIntervalInBackground: true,
	});

	return (
		<Fragment>
			{!isLoading && (
				<Fragment>
					<Container>
						<Header />
						<Hero />
						<Content>{children}</Content>
					</Container>
					<Footer />
				</Fragment>
			)}
			<Analytics />
		</Fragment>
	);
};

export default Layout;
