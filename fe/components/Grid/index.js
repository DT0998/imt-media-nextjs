import React from "react";
import styles from "./Grid.module.scss";

//Tạo grid column
export default function Grid(props) {
  const style = {
    gap: props.gap ? `${props.gap}px` : "0",
    justifyItems: props.justify ? props.justify : "",
  };

  const col = props.col ? `gridCol-${props.col}` : "";
  const mdCol = props.mdCol ? `gridCol-md-${props.mdCol}` : "";
  const smCol = props.smCol ? `gridCol-sm-${props.smCol}` : "";
  return (
    <div
      className={`${styles.grid} ${styles[col]} ${styles[mdCol]} ${styles[smCol]} `}
      style={style}
    >
      {props.children}
    </div>
  );
}
