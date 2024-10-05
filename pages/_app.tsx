import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

// assets
import '@/styles/globals.scss';

import '../node_modules/react-toastify/dist/ReactToastify.min.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Component {...pageProps} />
            <ToastContainer />
        </Fragment>
    );
}
