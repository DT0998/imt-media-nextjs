import styles from "./Why.module.scss";
import Image from "next/image";
function Why(props) {
  return (
    <div className={`${styles.why} hover-zoom`}>
      <div className={styles.whyIcon}>
        <Image src={props.icon} alt="" />
      </div>
      <div className={styles.whyText}>{props.title}</div>
      <div className={styles.whyDesc}>{props.desc}</div>
    </div>
  );
}
export default Why;
