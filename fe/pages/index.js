import Image from "next/image";
import React from "react";
import {
  FeedBack,
  Grid,
  Helmet,
  HeroSection,
  Project,
  Quotation,
  Section,
  SectionBody,
  SectionTitle,
  Why,
} from "../components";
import { ImagesData } from "../data/fake-data/activities";
import { FeedbackData } from "../data/fake-data/feedback-card";
import { partner } from "../data/fake-data/partner";
// data
import { quotationData } from "../data/fake-data/quotation-card";
import { WhyData } from "../data/fake-data/why-card";
import { useStore } from "../store/state";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const setUrlImg = useStore((state) => state.setUrlImg);
  const setIsOpenOverlay = useStore((state) => state.setIsOpenOverlay);
  const setUrlYoutube = useStore((state) => state.setUrlYoutube);
  return (
    <Helmet title="Trang Chủ">
      <HeroSection />

      <Section>
        <SectionTitle>
          <h1>VÌ SAO CHỌN NÊN CHỌN I-MT MEDIA CHÚNG TÔI ?</h1>
          <p>
            Là một nhà sản xuất, chúng tôi luôn đặt uy tín và chất lượng lên
            hàng đầu
          </p>
        </SectionTitle>
        <SectionBody>
          {WhyData.map((item, index) => (
            <Why
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>
          <h1>BẢNG GIÁ DỊCH VỤ</h1>
        </SectionTitle>
        <SectionBody>
          {quotationData.map((item, index) => (
            <Quotation
              key={index}
              Background={item.img}
              title={item.title}
              subtitle={item.subtitle}
              slug={item.slug}
            />
          ))}
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          <h1>DỰ ÁN TIÊU BIỂU</h1>
        </SectionTitle>
        <SectionBody>
          <Project />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>
          <h1>MỘT SỐ HÌNH ẢNH VÀ HOẠT ĐỘNG CỦA I-MT MEDIA</h1>
        </SectionTitle>
        <SectionBody>
          <Grid col={3} mdCol={2} smCol={1} gap={15}>
            {ImagesData.map((item, index) => (
              <div
                className="img-item hover-zoom"
                key={index}
                onClick={() => {
                  setUrlYoutube("");
                  setUrlImg(item.src.src);
                  setIsOpenOverlay(true);
                }}
              >
                <Image
                  width={370}
                  height={241}
                  src={item.src.src}
                  alt={item.alt}
                />
              </div>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section bg="Gray">
        <SectionTitle>
          <h1>ĐỐI TÁC</h1>
        </SectionTitle>
        <SectionBody>
          {partner.map((item) => (
            <div className={styles.imgItem} key={item.id}>
              <Image
                src={item.img.src}
                alt={item.alt}
                width={200}
                height={100}
              />
            </div>
          ))}
        </SectionBody>
      </Section>
      <Section bg="Img">
        <SectionTitle>
          <h1>NHẬN XÉT TỪ KHÁCH HÀNG</h1>
          <p style={{ color: "white" }}>
            Quý khách có những góp ý và nhận xét nào vui lòng gởi thông tin qua
            website hoặc inbox trên Fanpage của chúng tôi. Chân thành cảm ơn
          </p>
        </SectionTitle>
        <SectionBody>
          {FeedbackData.map((item, index) => (
            <FeedBack
              key={index}
              avatar={item.avatar}
              name={item.name}
              quote={item.quote}
              position={item.position}
            />
          ))}
        </SectionBody>
      </Section>
    </Helmet>
  );
}
