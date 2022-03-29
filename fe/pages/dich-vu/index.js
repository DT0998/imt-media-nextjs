import React from "react";
import {
  Helmet,
  HeroFlat,
  Section,
  SectionBody,
  SectionTitle,
} from "../../components";
import ImageLazyLoad from "../../components/Lazy-loading/lazy-loading";
// import Image from "next/image";
//data
import ProjectData from "../../data/fake-data/project";
//style
import styles from "./Service.module.scss";

export default function Service() {
  const projects = ProjectData.getProjects();
  return (
    <Helmet title="Dịch vụ">
      <HeroFlat page="Dịch vụ" />
      <Section>
        <SectionTitle>
          <h1>Các dịch vụ của chúng tôi</h1>
        </SectionTitle>
        <SectionBody>
          <div className={styles.serviceCard}>
            {projects.map((item, index) => (
              <div className={styles.serviceCard__Item} key={index}>
                <div className={styles.serviceCard__Item__Image}>
                  <ImageLazyLoad
                    src={item.thumbnail}
                    alt="Lorem ipsum dolor sit"
                    layout="fill"
                    placeholder="blur"
                  />
                </div>
                <div className={styles.serviceCard__Item__Content}>
                  <h3>Lorem ipsum dolor sit</h3>
                  <p>lorem ipsum dt Lorem ipsum dolor sit</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBody>
      </Section>
    </Helmet>
  );
}
