import styles from "./Why.module.scss";
// import Image from "next/image";
import ImageLazyLoad from "../Lazy-loading/lazy-loading";
function Why(props) {
  return (
    <div className={`${styles.why} hover-zoom`}>
      <div className={styles.whyIcon}>
        <ImageLazyLoad src={props.icon} alt="" placeholder="blur" />
      </div>
      <div className={styles.whyText}>{props.title}</div>
      <div className={styles.whyDesc}>{props.desc}</div>
    </div>
  );
}
export default Why;
