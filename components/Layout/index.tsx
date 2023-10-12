// packages
import React, { Fragment } from 'react';
import { Analytics } from '@vercel/analytics/react';

// components
import Container from './components/Container';
import Content from './components/Content';
import News from '@/components/News';
import Resume from '@/components/Resume';
import WhatsNew from '@/components/WhatsNew';
import RecentNews from '@/components/RecentNews';

const Layout: React.FC<LayoutProps> = (props) => {
	const { renderHero, renderContent } = props;

	return (
		<Fragment>
			<Container>
				{renderHero()}
				<Content>{renderContent()}</Content>
				<News>
					<Resume />
					<WhatsNew />
					<RecentNews />
				</News>
			</Container>
			<Analytics />
		</Fragment>
	);
};

export default Layout;
