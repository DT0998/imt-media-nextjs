import "../styles/globals.scss";
import { Layout, Overlay } from "../components";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useProgressStore, useStore } from "../store";

const MyApp = ({ Component, pageProps }) => {
  const isOpen = useStore((state) => state.isOpenOverlay);
  const setIsOpenOverlay = useStore((state) => state.setIsOpenOverlay);
  const urlYoutube = useStore((state) => state.urlYoutube);
  const urlImg = useStore((state) => state.urlImg);
  const setIsAnimating = useProgressStore((state)=>state.setIsAnimating)
  const isAnimating = useProgressStore((state)=>state.isAnimating)
  // loading
 const router = useRouter();
 useEffect(() => {
   const handleStart = () =>{
    setIsAnimating(true);
   }
   const handleStop = () =>{
    setIsAnimating(false);
   }
   router.events.on('routeChangeStart',handleStart);
   router.events.on('routeChangeComplete',handleStop);
   router.events.on('routeChangeError',handleStop);
 }, [router])
 


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
