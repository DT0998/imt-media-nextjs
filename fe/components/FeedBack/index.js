import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "./FeedBack.module.scss";
// import Image from "next/image";
import ImageLazyLoad from "../Lazy-loading/lazy-loading";
const FeedBack = (props) => {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedbackIcon}>
        <FaQuoteLeft />
      </div>
      <p className={styles.feedbackQuote}>{props.quote}</p>
      <div className={styles.feedbackAuthor}>
        <ImageLazyLoad src={props.avatar} alt={props.name} placeholder="blur" />
        <div className="author">
          {props.name} <span>({props.position})</span>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
