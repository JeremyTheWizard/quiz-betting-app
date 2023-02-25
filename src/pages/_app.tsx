import { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';

import { Web3ContextProvider } from '@/contexts/Web3';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ContextProvider>
    </>
  );
}

export default MyApp;
