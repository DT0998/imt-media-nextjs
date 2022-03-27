import "../styles/globals.scss";
import { Layout, Overlay } from "../components";
import Head from "next/head";
import { useStore } from "../store/state";

const MyApp = ({ Component, pageProps }) => {
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
      <Head />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
