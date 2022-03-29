//images
// import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ImPhone } from "react-icons/im";
import Typed from "typed.js";
import { Button, Grid } from "../";
import src2 from "../../assets/img/hero_connect.png";
import src from "../../assets/img/hero_create.png";
import src1 from "../../assets/img/hero_watch.png";
import { useStore } from "../../store/state";
import style from "../Button/Button.module.scss";
import ImageLazyLoad from "../Lazy-loading/lazy-loading";
//styles
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const elRef = useRef(null);
  const typed = useRef(null);

  const setIsOpenOverlay = useStore((state) => state.setIsOpenOverlay);
  const setUrlYoutube = useStore((state) => state.setUrlYoutube);

  useEffect(() => {
    var options = {
      strings: ["Event", "Quay Phim", "LiveStream"],
      typeSpeed: 200,
      backSpeed: 50,
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(elRef.current, options);
  }, []);
  return (
    <div className={styles.hero}>
      <div className="container">
        <Grid col={2} smCol={1}>
          <div className={styles.heroInfo}>
            <h1>
              Chuyên tổ chức <br />
              <span className="typing-animation" ref={elRef} />
            </h1>
            <h3>giúp cho các Tổ chức, Cá nhân, Doanh nghiệp</h3>
            <p>
              với đội ngũ sản xuất giàu kinh nghiệm và chuyên nghiệp sẵn sàng
              đáp ứng các nhu cầu của khách hàng, chi phí cạnh tranh trên thị
              trường tăng khả năng tiếp cận tới khách hàng khi sử dụng dịch vụ
              của <strong>I-MT Media.</strong>
            </p>
            <div className={styles.infoAction}>
              <div className={styles.infoAction_left}>
                <a href="tel:0345889755">
                  <Button type="Outline">
                    <div className={`align-center ${style.btnContent}`}>
                      <ImPhone className={style.btnIcon} />
                      <span>Liên hệ ngay</span>
                    </div>
                  </Button>
                </a>
                <div className={`${styles.connect} flex-start`}>
                  <ImageLazyLoad src={src2} alt="" placeholder="blur" />
                  <span>Members Team</span>
                </div>
              </div>
              <div
                className={styles.infoAction_right}
                onClick={() => {
                  setUrlYoutube("8B9MvyoPrHw");
                  setIsOpenOverlay(true);
                }}
              >
                <ImageLazyLoad
                  src={src1}
                  alt=""
                  className={`${styles.playLogo} spin`}
                  height={250}
                  width={250}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <ImageLazyLoad src={src} alt="" placeholder="blur" />
          </div>
        </Grid>
      </div>
    </div>
  );
}
