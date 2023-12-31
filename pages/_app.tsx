// packages
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

// assets
import '@/styles/globals.scss';
import '../node_modules/react-toastify/dist/ReactToastify.min.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
			<ToastContainer />
		</QueryClientProvider>
	);
}
