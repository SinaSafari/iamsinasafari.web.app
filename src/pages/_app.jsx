import "../styles/globals.css";
import { Layout } from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>I am Sina Safari</title>
        <meta
          property="description"
          content="I am sina safari and this is my portfolio!"
        ></meta>
        <meta property="og:title" content="I am Sina Safari" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://iamsinasafari.web.app/me.JPG"
        />
        <meta property="og:url" content="https://iamsinasafari.web.app" />
        <meta
          property="og:description"
          content="I am Sina Safari and you can know me better from my website!"
        />
        <link rel="icon" href="/logo.png"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
