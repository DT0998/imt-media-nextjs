import React from "react";
import {
  Helmet,
  HeroFlat,
  ProjectCard,
  Section,
  SectionBody,
  SectionTitle,
} from "../../components";
//data
import ProjectData from "../../data/fake-data/project";
//style
import styles from "./Project.module.scss";

export default function Project() {
  const project = ProjectData.getProjects();
  // console.log(project);
  return (
    <Helmet title="Dự án">
      <HeroFlat page="Dự án" />
      <Section>
        <SectionTitle>
          <h1>Một số dự án tiêu biểu</h1>
        </SectionTitle>
        <SectionBody>
          <div className={styles.projectCard}>
            {project.map((item, index) => (
              <ProjectCard
                key={index}
                thumbnail={item.thumbnail}
                url={item.urlYoutube}
                setIsOpenOverlay={true}
                classname={styles.projectCard__Item}
              />
            ))}
          </div>
        </SectionBody>
      </Section>
    </Helmet>
  );
}
