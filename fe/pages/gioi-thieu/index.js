import React from "react";
import styles from "./About.module.scss";
import { Helmet, HeroFlat } from "../../components";

export default function About() {
  return (
    <Helmet title="Giới thiệu">
      <HeroFlat page="Giới thiệu" />
      <div className={styles.aboutContent}>
        <div className="container">
          <div className={styles.aboutContent__left}>
            <h1>Giới thiệu về IMT Media</h1>
            <p>
              Với nhiều năm kinh nghiệm làm việc trong lĩnh vực quay phim và
              chụp hình tại TP. Hồ Chí Minh, với thương hiệu{" "}
              <strong>IMT Media</strong>, tự hào là một trong những đơn vị
              chuyên nghiệp hàng đầu trong lĩnh vực Truyền thông – Giải trí.
            </p>
            <p>
              Với sức mạnh kinh nghiệm của một tập thể đầy năng lực, tác phong
              chuyên nghiệp, tinh thần làm việc nghiêm túc. Nguồn nhân lực trẻ
              có sức sáng tạo không ngừng và gu thẩm mỹ nghệ thuật đa phong
              cách. Sự đầu tư có chiều sâu về hệ thống trang thiết bị chuyên
              nghiệp. Chúng tôi mang tới cho khách hàng không chỉ là sự thỏa mãn
              cho công việc mà còn là sự tin tưởng và hợp tác lâu dài.
            </p>
            <p>
              <iframe
                src="https://www.youtube.com/embed/8B9MvyoPrHw"
                title="IMT Media"
                frameborder="0"
              ></iframe>
            </p>

            <p>
              <strong>IMT Media</strong> kết nối khách hàng bằng các chương
              trình gặp gỡ, triển lãm, hội nghị và hợp tác tìm kiếm phát triển
              các cơ hội kinh doanh. Dù bằng bất kỳ phương cách kết nối nào,
              khách hàng lựa chọn và đến <strong>IMT Media</strong> để có sự
              trải nghiệm với những trang thiết bị hiện đại, những dịch vụ
              chuyên nghiệp… hoặc đơn giản là họ bị ấn tượng với những sản phẩm
              có giá trị nghệ thuật và tính thẩm mỹ cao mà chúng tôi đã thực
              hiện.
            </p>
            <p>
              Thành công của khách hàng chính là nguồn động lực lớn nhất để
              chúng tôi không ngừng phát triển và tự hoàn thiện các dịch vụ,
              nhằm mang lại cho khách hàng những sản phẩm tối ưu với giá cả hợp
              lý nhất.
            </p>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
