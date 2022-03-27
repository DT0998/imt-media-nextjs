import React from "react";
import styles from "./Section.module.scss";

export default function Section(props) {
  const bgs = props.bg
    ? props.bg === "Img"
      ? styles.section__Img
      : props.bg === "Gray"
      ? styles.section__Gray
      : ""
    : "";

  return (
    <div className={`${styles.section} ${bgs}`}>
      <div className="container">{props.children}</div>
    </div>
  );
}

export const SectionTitle = (props) => {
  return <div className={styles.section__Title}>{props.children}</div>;
};

export const SectionBody = (props) => {
  return <div className={styles.section__Body}>{props.children}</div>;
};
