// packages
import React, { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';

// components
import Container from './components/Container';
import Hero from '@/components/Hero';
import Content from './components/Content';
import News from '@/components/News';

// types
import { ChildrenProps } from '@/types';

const Layout: React.FC<ChildrenProps> = (props) => {
	const { children } = props;

	return (
		<Fragment>
			<Container>
				<Hero />
				<Content>{children}</Content>
				<News />
			</Container>
			<Analytics />
		</Fragment>
	);
};

export default Layout;
