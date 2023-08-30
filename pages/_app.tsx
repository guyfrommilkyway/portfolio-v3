// import packages below
import type { AppProps } from 'next/app'

// import assets below
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
