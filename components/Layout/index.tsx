// packages
import React, { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';

// components
import Container from './components/Container';
import Content from './components/Content';
import News from '@/components/News';

// types
import { LayoutProps } from '@/types';

const Layout: React.FC<LayoutProps> = (props) => {
	const { renderHero, renderContent, renderNews } = props;

	return (
		<Fragment>
			<Container>
				{renderHero()}
				<Content>{renderContent()}</Content>
				<News>{renderNews()}</News>
			</Container>
			<Analytics />
		</Fragment>
	);
};

export default Layout;
