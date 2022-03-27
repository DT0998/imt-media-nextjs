import Link from "next/link";
import { FaHome } from "react-icons/fa";
import styles from "./HeroFlat.module.scss";
const HeroFlat = ({ page }) => {
  return (
    <>
      <div className={styles.heroFlat}>
        <div className="container">
          <div className={styles.heroFlat__content}>
            <h2>{page}</h2>
            <span>
              <Link href="/">
                <a>
                  <FaHome />
                </a>
              </Link>{" "}
              / {page}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroFlat;
