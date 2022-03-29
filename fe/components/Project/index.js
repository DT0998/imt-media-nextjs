import React from "react";
import ProjectData from "../../data/fake-data/project";
import styles from "./Project.module.scss";
import ProjectCard from "./ProjectCard";
export default function Project() {
  const project = ProjectData.getProjectCount(5);
  // console.log(project);
  return (
    <div className={styles.project}>
      <div className={styles.project__Item}>
        <p>
          Mang đến cho quý khách , nhiều sự lựa chọn dễ dàng cho mọi chương
          trình. Chúng tôi đáp ứng tất cà các chương trình lớn nhỏ và những gia
          đình muốn ghi lại khoẳnh khắc quan trọng. Bên cạnh dịch vụ quay phim
          chụp hình, chúng tôi còn cung cấp các dịch vụ khác nhằm mang lại sự
          hài lòng cho quý khách khi đến với chúng tôi.
        </p>
      </div>
      {project.map((item, index) => (
        <ProjectCard
          thumbnail={item.thumbnail}
          url={item.urlYoutube}
          key={index}
          setIsOpenOverlay={true}
          classname={styles.project__Item}
        />
      ))}
    </div>
  );
}
