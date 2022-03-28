import React from "react";
import {
  Helmet,
  HeroFlat,
  Section,
  SectionBody,
  SectionTitle,
} from "../../components";
//data

//style
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <Helmet title="Liên hệ">
      <HeroFlat page="Liên hệ" />
      <Section>
        <SectionTitle>
          <h1>Liên hệ với chúng tôi</h1>
        </SectionTitle>
        <SectionBody>
          <div className={styles.contactItem}>
            <h3 className={styles.contactItemTitle}>
              Công ty truyền thông sự kiện <strong>IMT Media</strong>
            </h3>
            <p>
              Địa chỉ:
              <span>
                Số 31, Đường D11, Phường Tây Thạnh, Quận Tân Phú, TP. HCM
              </span>
            </p>
            <p>
              Điện thoại:
              <span>0917710660 / 0907710660</span>
            </p>
            <p>
              Email:
              <span>imt.mediapro@gmail.com</span>
            </p>
            <p>
              Website:
              <span>imt-media.vn</span>
            </p>
            <i>
              Nếu bạn cần thông tin gì vui lòng điền đầy đủ thông tin và gởi cho
              chúng tôi ...
            </i>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contact__item__icon}>
              <i className="fas fa-phone"></i>
            </div>
            <div className={styles.contact__item__content}>
              <h3>Điện thoại</h3>
            </div>
          </div>
        </SectionBody>
      </Section>
    </Helmet>
  );
}
