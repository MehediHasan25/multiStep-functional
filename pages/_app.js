// import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.min') : null
  // }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          crossorigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          crossorigin="anonymous"
        />

        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          crossorigin="anonymous"
        />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
