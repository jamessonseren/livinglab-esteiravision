import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meu App Next.js</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

