import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React, { Fragment, ReactNode } from 'react';

import Hero from '@/components/routes/home/components/Hero';

import { IFirebase } from '@/services/firebase';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

interface Props extends IFirebase {
    children: ReactNode;
}

const Layout: React.FC<Props> = props => {
    const { hero, children } = props;

    return (
        <Fragment>
            <Header />
            <MainContainer>
                <Hero {...hero} />
                <Content>{children}</Content>
            </MainContainer>
            <Footer />
            <Analytics />
            <SpeedInsights />
        </Fragment>
    );
};

export default Layout;
