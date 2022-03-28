import "../styles/globals.scss";
import { Layout, Overlay } from "../components";
import Head from "next/head";
import { useStore } from "../store/state";
import Router from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const isOpen = useStore((state) => state.isOpenOverlay);
  const setIsOpenOverlay = useStore((state) => state.setIsOpenOverlay);
  const urlYoutube = useStore((state) => state.urlYoutube);
  const urlImg = useStore((state) => state.urlImg);
  // loading
  Router.events.on('routeChangeStart',(url)=>{
    console.log("route change");
  })
  Router.events.on('routeChangeComplete',(url)=>{
    console.log("route change complete");
  })

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
      <Head />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
