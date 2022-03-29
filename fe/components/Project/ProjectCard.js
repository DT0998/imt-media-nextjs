// import Image from "next/image";
import React from "react";
import { useStore } from "../../store/state";
import ImageLazyLoad from "../Lazy-loading/lazy-loading";
import styles from "./Project.module.scss";
export default function ProjectCard({
  url,
  thumbnail,
  setIsOpenOverlay,
  classname,
}) {
  // console.log(classname);
  const setIsOpenOverlays = useStore((state) => state.setIsOpenOverlay);
  const setUrlYoutubes = useStore((state) => state.setUrlYoutube);
  const className = classname ? classname : styles.projectCard__Item;
  return (
    <div
      className={`${className}  hover-zoom`}
      onClick={() => {
        setIsOpenOverlays(setIsOpenOverlay);
        setUrlYoutubes(url);
      }}
    >
      <ImageLazyLoad
        src={thumbnail}
        className={styles.project__Img}
        alt=""
        layout="fill"
        placeholder="blur"
      />
    </div>
  );
}
