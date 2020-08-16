import "../styles/index.css";
import Head from "next/head";
import { Footer } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
