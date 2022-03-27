import React from "react";
import { MdClose } from "react-icons/md";
import styles from "./Overlay.module.scss";

export default function Overlay({ isOpen, setIsOpen, urlYoutube, urlImg }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div className={styles.overlay__Close}>
          <MdClose onClick={() => setIsOpen(false)} />
        </div>
        <div className={styles.overlay__Content}>
          {urlYoutube ? (
            <iframe
              src={`https://www.youtube.com/embed/${urlYoutube}`}
              title="YouTube video player"
              allow="autoplay; encrypted-media; gyroscope"
            ></iframe>
          ) : urlImg ? (
            <img src={urlImg} alt="" />
          ) : null}
        </div>
      </div>
    </>
  );
}
