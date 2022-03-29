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
            <h3 className={styles.contactItem__Title}>
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
          <div className={styles.contactMap}>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1291677448894!2d106.76701431488603!3d10.877778992252837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd339c156a4b9a9b!2zMTDCsDUyJzQwLjAiTiAxMDbCsDQ2JzA5LjEiRQ!5e0!3m2!1svi!2s!4v1648480812075!5m2!1svi!2s"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </SectionBody>
      </Section>
    </Helmet>
  );
}
