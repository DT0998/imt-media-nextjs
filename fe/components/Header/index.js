import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaFacebook, FaPhone, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { SiZalo } from "react-icons/si";
import styles from "./Header.module.scss";
const navLinks = [
  {
    display: "Trang chủ",
    slug: "/",
  },
  {
    display: "Giới thiệu",
    slug: "/gioi-thieu",
  },
  {
    display: "Dịch vụ",
    slug: "/dich-vu",
  },
  {
    display: "Dự án tiêu biểu",
    slug: "/du-an",
  },
  {
    display: "Liên hệ",
    slug: "/lien-he",
  },
];
const socialLinks = [
  {
    display: "Zalo",
    url: "https://zalo.me/0345889755",
    icon: <SiZalo className="text-white text-[15px]" />,
  },
  {
    display: "Facebook",
    url: "https://www.facebook.com/",
    icon: <FaFacebook className="text-white text-[15px]" />,
  },
  {
    display: "Phone",
    url: "tel:0345889755",
    icon: <FaPhone className="text-white text-[15px]" />,
  },
  {
    display: "Youtube",
    url: "https://www.youtube.com/",
    icon: <FaYoutube className="text-white text-[15px]" />,
  },
];

export const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const router = useRouter();
  // console.log(router.asPath);
  return (
    <header className={styles.header}>
      <div className="flex container">
        <div className={styles.header__logo}>
          <Link href="/">
            <a>
              <svg
                className={styles.header__logo__svg}
                width="120"
                height="40"
                viewBox="0 0 140 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_146_309)">
                  <path
                    d="M5.58359 20.6985L0 18.2703V12.5122L5.58359 14.9404V20.6985Z"
                    fill="white"
                  />
                  <path
                    d="M15.818 38.2494V43.1092L0 50V20.7245L5.58359 23.1593V42.7055L15.818 38.2494Z"
                    fill="#F37021"
                  />
                  <path
                    d="M57.4423 24.9984L39.8495 32.6541L34.2616 35.0856L27.3998 38.0704V33.2107L28.6823 32.6541L34.2616 30.2194L46.2708 24.9984L37.4139 21.1412L31.8303 18.713L31.5928 18.6088L18.8192 24.1325V13.0493L17.9815 12.6815L5.58359 7.29119V12.4894L0 10.0547V0L5.58359 2.42823L17.9815 7.82176L18.8192 8.18957L24.4028 10.6178V16.8576L25.992 16.1708L31.5928 13.7491L31.8303 13.8533L37.1937 16.1871L37.4139 16.2815L57.4423 24.9984Z"
                    fill="#F37021"
                  />
                  <path
                    d="M24.4029 39.3757V31.1828L38.7656 24.9333L35.1037 23.3416L33.182 22.5018L20.8878 27.853L18.8193 28.7546L9.47876 32.8169V37.6766L18.8193 33.6143V41.8072L24.4029 39.3757Z"
                    fill="white"
                  />
                  <path
                    d="M107.081 36.0881C108.399 36.0881 109.495 36.7066 109.495 38.0769V42.0513C109.497 42.0675 109.495 42.0838 109.487 42.0991C109.48 42.1144 109.468 42.1283 109.453 42.1398C109.438 42.1513 109.419 42.1601 109.399 42.1656C109.379 42.1711 109.357 42.1732 109.336 42.1717H109.094C109.073 42.1733 109.051 42.1713 109.031 42.1657C109.011 42.1602 108.993 42.1513 108.978 42.1397C108.963 42.1282 108.951 42.1142 108.945 42.0989C108.938 42.0836 108.936 42.0673 108.938 42.0513V38.0835C108.938 36.9898 108.127 36.4918 107.047 36.4918C105.967 36.4918 104.771 37.1265 104.771 38.5782V42.0578C104.773 42.0739 104.771 42.0901 104.763 42.1053C104.756 42.1204 104.744 42.1342 104.729 42.1454C104.713 42.1567 104.695 42.1652 104.675 42.1703C104.654 42.1754 104.633 42.177 104.611 42.175H104.37C104.348 42.177 104.327 42.1754 104.306 42.1703C104.286 42.1652 104.268 42.1567 104.252 42.1454C104.237 42.1342 104.225 42.1204 104.218 42.1053C104.21 42.0901 104.208 42.0739 104.21 42.0578V38.0835C104.21 36.9898 103.402 36.4918 102.323 36.4918C101.243 36.4918 100.047 37.1265 100.047 38.5782V42.0578C100.049 42.0739 100.046 42.0901 100.039 42.1053C100.032 42.1204 100.02 42.1342 100.005 42.1454C99.9892 42.1567 99.9706 42.1652 99.9503 42.1703C99.93 42.1754 99.9084 42.177 99.8872 42.175H99.6453C99.6241 42.177 99.6025 42.1754 99.5822 42.1703C99.5619 42.1652 99.5433 42.1567 99.528 42.1454C99.5126 42.1342 99.5009 42.1204 99.4935 42.1053C99.4862 42.0901 99.4834 42.0739 99.4856 42.0578V36.3388C99.4834 36.3227 99.4862 36.3065 99.4935 36.2913C99.5009 36.2761 99.5126 36.2624 99.528 36.2512C99.5433 36.2399 99.5619 36.2314 99.5822 36.2263C99.6025 36.2212 99.6241 36.2196 99.6453 36.2216H99.9044C99.9257 36.2196 99.9473 36.2212 99.9676 36.2263C99.9879 36.2314 100.006 36.2399 100.022 36.2512C100.037 36.2624 100.049 36.2761 100.056 36.2913C100.064 36.3065 100.066 36.3227 100.064 36.3388V37.2371C100.261 36.8943 100.588 36.603 101.003 36.3997C101.419 36.1964 101.905 36.0903 102.4 36.0946C102.912 36.0764 103.416 36.1922 103.827 36.4224C104.238 36.6527 104.53 36.9831 104.655 37.3576C104.835 36.9823 105.166 36.6588 105.602 36.4324C106.038 36.2059 106.556 36.0878 107.086 36.0946L107.081 36.0881Z"
                    fill="#F37021"
                  />
                  <path
                    d="M119.108 39.2227V39.3106C119.109 39.3266 119.105 39.3425 119.097 39.3572C119.089 39.372 119.076 39.3852 119.061 39.396C119.045 39.4069 119.027 39.415 119.006 39.4199C118.986 39.4248 118.965 39.4264 118.944 39.4245H111.896C111.902 39.7596 111.997 40.0904 112.175 40.3975C112.353 40.7047 112.61 40.982 112.932 41.2133C113.253 41.4445 113.633 41.6251 114.048 41.7444C114.464 41.8637 114.907 41.9194 115.351 41.9081C116.698 41.9081 117.756 41.4198 118.184 40.694C118.201 40.6675 118.229 40.6455 118.262 40.6305C118.296 40.6155 118.335 40.6081 118.374 40.6093H118.655C118.771 40.6093 118.832 40.6549 118.793 40.7265C118.292 41.6737 116.988 42.3052 115.338 42.3052C112.972 42.3052 111.335 41.0032 111.335 39.1999C111.335 37.3967 112.92 36.0947 115.295 36.0947C117.67 36.0947 119.108 37.592 119.108 39.2227ZM111.892 39.0274H118.555C118.417 37.4585 117.027 36.4918 115.291 36.4918C113.36 36.4918 111.996 37.5366 111.892 39.0176V39.0274Z"
                    fill="#F37021"
                  />
                  <path
                    d="M128.544 33.8389C128.565 33.8369 128.586 33.8385 128.607 33.8436C128.627 33.8487 128.646 33.8572 128.661 33.8685C128.676 33.8798 128.688 33.8935 128.695 33.9087C128.703 33.9238 128.705 33.94 128.703 33.9561V42.0578C128.705 42.0739 128.703 42.0901 128.695 42.1052C128.688 42.1204 128.676 42.1341 128.661 42.1454C128.646 42.1567 128.627 42.1652 128.607 42.1703C128.586 42.1754 128.565 42.177 128.544 42.175H128.302C128.281 42.177 128.259 42.1754 128.239 42.1703C128.218 42.1652 128.2 42.1567 128.184 42.1454C128.169 42.1341 128.157 42.1204 128.15 42.1052C128.143 42.0901 128.14 42.0739 128.142 42.0578V40.5735C127.831 41.0951 127.324 41.5367 126.684 41.8439C126.044 42.151 125.299 42.3102 124.541 42.3019C123.472 42.2758 122.458 41.9374 121.714 41.3582C120.97 40.779 120.554 40.0044 120.554 39.1983C120.554 38.3921 120.97 37.6176 121.714 37.0384C122.458 36.4592 123.472 36.1207 124.541 36.0946C125.299 36.0863 126.044 36.2456 126.684 36.5527C127.324 36.8598 127.831 37.3014 128.142 37.823V33.9561C128.14 33.94 128.143 33.9238 128.15 33.9087C128.157 33.8935 128.169 33.8798 128.184 33.8685C128.2 33.8572 128.218 33.8487 128.239 33.8436C128.259 33.8385 128.281 33.8369 128.302 33.8389H128.544ZM128.142 39.1967C128.139 38.6642 127.926 38.1444 127.531 37.7029C127.136 37.2614 126.576 36.918 125.923 36.716C125.269 36.514 124.551 36.4625 123.858 36.5679C123.166 36.6734 122.53 36.9311 122.032 37.3085C121.534 37.686 121.195 38.1662 121.058 38.6886C120.922 39.2111 120.994 39.7523 121.265 40.244C121.536 40.7358 121.994 41.1559 122.582 41.4515C123.169 41.7471 123.86 41.9048 124.566 41.9048C125.039 41.9083 125.507 41.8406 125.944 41.7056C126.381 41.5705 126.778 41.371 127.111 41.1186C127.444 40.8663 127.707 40.5662 127.884 40.2362C128.061 39.9061 128.149 39.5526 128.142 39.1967Z"
                    fill="#F37021"
                  />
                  <path
                    d="M131.333 34.9098V33.9561C131.331 33.9403 131.334 33.9244 131.341 33.9095C131.348 33.8946 131.359 33.8811 131.374 33.8699C131.389 33.8587 131.407 33.8501 131.427 33.8448C131.447 33.8394 131.468 33.8374 131.489 33.8389H131.73C131.752 33.8369 131.773 33.8385 131.794 33.8436C131.814 33.8487 131.832 33.8572 131.848 33.8685C131.863 33.8798 131.875 33.8935 131.882 33.9087C131.89 33.9238 131.892 33.94 131.89 33.9561V34.9098C131.892 34.926 131.889 34.9423 131.882 34.9576C131.875 34.9729 131.863 34.9868 131.848 34.9983C131.833 35.0098 131.814 35.0186 131.794 35.0242C131.774 35.0297 131.752 35.0318 131.73 35.0303H131.489C131.467 35.0319 131.446 35.0298 131.426 35.0243C131.406 35.0187 131.387 35.0099 131.372 34.9983C131.357 34.9867 131.346 34.9727 131.339 34.9574C131.333 34.9421 131.33 34.9258 131.333 34.9098V34.9098ZM131.333 42.0708V36.3388C131.331 36.323 131.334 36.3071 131.341 36.2922C131.348 36.2773 131.359 36.2638 131.374 36.2526C131.389 36.2414 131.407 36.2328 131.427 36.2274C131.447 36.2221 131.468 36.2201 131.489 36.2216H131.73C131.752 36.2196 131.773 36.2212 131.794 36.2263C131.814 36.2314 131.832 36.2399 131.848 36.2512C131.863 36.2624 131.875 36.2761 131.882 36.2913C131.89 36.3065 131.892 36.3227 131.89 36.3388V42.0578C131.892 42.0739 131.89 42.0901 131.882 42.1053C131.875 42.1204 131.863 42.1342 131.848 42.1454C131.832 42.1567 131.814 42.1652 131.794 42.1703C131.773 42.1754 131.752 42.177 131.73 42.175H131.489C131.468 42.1765 131.447 42.1745 131.427 42.1691C131.407 42.1638 131.389 42.1552 131.374 42.144C131.359 42.1328 131.348 42.1193 131.341 42.1044C131.334 42.0895 131.331 42.0736 131.333 42.0578V42.0708Z"
                    fill="#F37021"
                  />
                  <path
                    d="M137.159 36.0881C138.748 36.0881 140 36.8368 140 38.2202V42.0513C140.002 42.0671 139.999 42.083 139.992 42.0979C139.985 42.1128 139.974 42.1263 139.959 42.1375C139.944 42.1487 139.926 42.1573 139.906 42.1626C139.887 42.168 139.865 42.17 139.845 42.1685H139.603C139.582 42.1705 139.56 42.1689 139.54 42.1638C139.519 42.1587 139.501 42.1502 139.485 42.1389C139.47 42.1276 139.458 42.1139 139.451 42.0987C139.444 42.0836 139.441 42.0674 139.443 42.0513V41.4003C138.964 42.0513 137.962 42.3052 136.826 42.3052C135.328 42.3052 133.998 41.6737 133.998 40.4694C133.998 39.265 135.328 38.6303 136.826 38.6303C137.975 38.6303 138.955 38.933 139.443 39.5287V38.2267C139.464 37.9959 139.419 37.7644 139.312 37.5477C139.205 37.331 139.037 37.134 138.821 36.9698C138.605 36.8057 138.345 36.6781 138.058 36.5957C137.772 36.5132 137.465 36.4778 137.159 36.4918C135.924 36.4918 134.965 36.9865 134.883 37.8719C134.881 37.9035 134.862 37.9333 134.832 37.9552C134.801 37.977 134.761 37.9891 134.719 37.9891H134.477C134.455 37.9906 134.433 37.9885 134.412 37.9828C134.392 37.9771 134.373 37.968 134.358 37.9561C134.342 37.9442 134.331 37.9299 134.324 37.9142C134.317 37.8985 134.314 37.8818 134.317 37.8654C134.408 36.8205 135.526 36.0946 137.159 36.0946V36.0881ZM136.908 41.9081C138.277 41.9081 139.443 41.4784 139.443 40.4596C139.443 39.4408 138.225 39.0079 136.908 39.0079C135.431 39.0079 134.555 39.597 134.555 40.4596C134.555 41.3222 135.418 41.9081 136.908 41.9081Z"
                    fill="#F37021"
                  />
                  <path
                    d="M62.8142 31.453V11.2949H68.5317V31.453H62.8142Z"
                    fill="#F37021"
                  />
                  <path
                    d="M74.3269 26.4696V22.9998H84.557V26.4696H74.3269Z"
                    fill="#F37021"
                  />
                  <path
                    d="M87.9167 31.4531L91.9889 11.2949H97.9828L103.135 23.1658C103.28 23.523 103.4 23.886 103.493 24.253C103.618 24.7282 103.739 25.2751 103.847 25.8805C103.946 25.2555 104.054 24.6989 104.175 24.2074C104.255 23.841 104.372 23.4797 104.525 23.1268L109.767 11.2851H115.666L119.769 31.4531H114.332L112.38 19.2956C112.233 18.394 112.134 17.717 112.086 17.258C112.039 16.7991 112.013 16.3727 112.013 15.9755C112.013 15.764 112.013 15.6077 112.013 15.5003C112.013 15.3929 112.013 15.3018 112.043 15.2204C111.858 16.0081 111.685 16.6916 111.521 17.2645C111.408 17.7041 111.264 18.1387 111.089 18.5665L105.428 31.4531H102.21L96.6398 18.5665C96.5923 18.4461 96.4843 18.1141 96.3202 17.59C96.1561 17.066 95.9272 16.2587 95.6336 15.2204V15.8128C95.6147 16.9646 95.5051 18.1146 95.3054 19.2566V19.3119L93.3708 31.4693L87.9167 31.4531Z"
                    fill="#F37021"
                  />
                  <path
                    d="M133.462 14.9567V31.453H127.723V14.9567H121.185V11.2949H140V14.9567H133.462Z"
                    fill="#F37021"
                  />
                  <path
                    d="M95.655 38.9558H62.8142V39.4441H95.655V38.9558Z"
                    fill="#F37021"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_146_309">
                    <rect width="140" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
        </div>
        {!isOpenNav ? (
          <GiHamburgerMenu
            className={styles.navIcon}
            onClick={() => setIsOpenNav(!isOpenNav)}
          />
        ) : (
          <IoMdClose
            className={styles.navIcon}
            onClick={() => setIsOpenNav(!isOpenNav)}
          />
        )}
        <div className={styles.navigation}>
          {navLinks.map((link, index) => (
            <Link href={link.slug} key={index}>
              <a
                className={`${
                  link.slug === router.asPath ? "text-orange" : "text-white"
                } ${styles.navigation__Link} `}
              >
                {link.display}
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.social}>
          {socialLinks.map((link, index) => (
            <Link href={link.url} key={index}>
              <a className={`hover-zoom ${styles.social__link}`}>
                <span className={styles.social__icon}>{link.icon}</span>
              </a>
            </Link>
          ))}
        </div>
        {isOpenNav && (
          <div className={styles.popup}>
            <div className={styles.popup__Navigation}>
              {navLinks.map((link, index) => (
                <Link href={link.slug} key={index}>
                  <a
                    className={`${
                      link.slug === router.asPath ? "text-orange" : ""
                    } ${styles.popup__Navigation__Link} `}
                  >
                    {link.display}
                  </a>
                </Link>
              ))}
            </div>
            <div className={styles.popup__Social}>
              {socialLinks.map((link, index) => (
                <Link href={link.url} key={index}>
                  <a className={styles.popup__Social__NavLink}>
                    <span className={styles.popup__Social__NavIcon}>
                      {link.icon}
                    </span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
