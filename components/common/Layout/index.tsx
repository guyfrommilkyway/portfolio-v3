import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React, { Fragment, ReactNode } from 'react';

import Hero from '@/components/routes/home/components/Hero';

import { PageProps } from '@/types/pageProps';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

interface Props extends PageProps {
    children: ReactNode;
}

const Layout: React.FC<Props> = props => {
    const { firebase, children } = props;

    const HeroProps = { data: firebase?.v1?.hero };

    return (
        <Fragment>
            <Header />
            <MainContainer>
                <Hero {...HeroProps} />
                <Content>{children}</Content>
            </MainContainer>
            <Footer />
            <Analytics />
            <SpeedInsights />
        </Fragment>
    );
};

export default Layout;
