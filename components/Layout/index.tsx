// packages
import React, { Fragment, useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

// components
import Container from './components/Container';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Content from './components/Content';
import Footer from '@/components/Footer';

// types
import { ChildrenProps } from '@/types';

const Layout: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	const [isLoading, setIsLoading] = useState<boolean>(true);

	// will run on initial page load only
	useEffect(() => {
		const loadingTimeout = setTimeout(() => setIsLoading(false), 200);

		return () => clearTimeout(loadingTimeout);
	}, []);

	const loading = isLoading ? 'opacity-0' : 'opacity-100';

	return (
		<Fragment>
			<Container loading={loading}>
				<Header />
				<Hero />
				<Content>{children}</Content>
			</Container>
			<Footer />
			<Analytics />
		</Fragment>
	);
};

export default Layout;
