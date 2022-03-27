import "../styles/globals.scss";
import { Layout, Overlay } from "../components";
import App from "next/app";
import Head from "next/head";
import { useStore } from "../store/state";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  console.log(global);
  const isOpen = useStore((state) => state.isOpenOverlay);
  const setIsOpenOverlay = useStore((state) => state.setIsOpenOverlay);
  const urlYoutube = useStore((state) => state.urlYoutube);
  const urlImg = useStore((state) => state.urlImg);
  return (
    <>
      {isOpen && (
        <Overlay
          isOpen={isOpen}
          setIsOpen={setIsOpenOverlay}
          urlYoutube={urlYoutube}
          urlImg={urlImg}
        />
      )}
      <Head>
        <link
          rel="shortcut icon"
          // href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      {/* <GlobalContext.Provider value={global.attributes}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </GlobalContext.Provider> */}
    </>
  );
};
// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
