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
