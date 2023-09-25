// packages below
import React, { Fragment, ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

// components below
import Container from './components/Container';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Content from './components/Content';
import Footer from '@/components/Footer';

// types below
import { ChildrenProps } from '@/types';

const Layout: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<Fragment>
			<Container>
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
