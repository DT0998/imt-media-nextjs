import React from "react";
import Image from "next/image";
import styles from "./Project.module.scss";
export default function ProjectCard({
  url,
  thumbnail,
  setIsOpenOverlay,
  setUrlYoutube,
}) {
  return (
    <>
      <div
        className={`${styles.project__Item} hover-zoom`}
        onClick={() => {
          setIsOpenOverlay(true);
          setUrlYoutube(url);
        }}
      >
        <Image src={thumbnail.src} alt="" layout="fill" />
      </div>
    </>
  );
}
