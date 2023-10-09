// packages below
import React, { Fragment, useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

// components below
import Container from './components/Container';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Content from './components/Content';
import Footer from '@/components/Footer';

// types below
import { ChildrenProps } from '@/types';
import LoadingScreen from '../LoadingScreen';

const Layout: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	// state
	const [isLoading, setIsLoading] = useState(true);
	const [isRemoving, setIsRemoving] = useState(false);

	// will only run on initial load
	useEffect(() => {
		// timers
		const loadingTimeout = setTimeout(() => setIsLoading(false), 400);
		const removingTimeout = setTimeout(() => setIsRemoving(true), 600);

		// clean up function
		return () => {
			clearTimeout(loadingTimeout);
			clearTimeout(removingTimeout);
		};
	}, []);

	return (
		<Fragment>
			<Container>
				<Header />
				<Hero />
				<Content>{children}</Content>
			</Container>
			<Footer />
			<Analytics />
			<LoadingScreen isLoading={isLoading} isRemoving={isRemoving} />
		</Fragment>
	);
};

export default Layout;
