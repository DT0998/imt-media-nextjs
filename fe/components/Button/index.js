import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, type, bg, size }) => {
  const types = type ? "btn" + type : "";
  const sizes = size ? "btn" + size : "";
  const bgs = bg ? "btn" + bg : "";

  return (
    <button
      className={`${styles.btn} ${styles[types]} ${styles[sizes]} ${styles[bgs]} hover-zoom`}
    >
      {children}
    </button>
  );
};

export default Button;
